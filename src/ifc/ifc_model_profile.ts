/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { CanonicalProfile } from '../core/canonical_profile'
import {ModelProfile} from '../core/model'
import { IfcProfileDef } from './ifc4_gen'
import path from 'path'
import fsPromises from 'fs/promises'
import crypto from 'crypto'
import IfcStepModel from './ifc_step_model'


const MAX_FILES_OPEN = 64

/**
 * IFC model profile cache.
 */
export class IfcModelProfile implements ModelProfile {

  private readonly profiles_ = new Map< number, CanonicalProfile >()

  /**
   * Construct this with its parent model.
   *
   * @param model The model for this.
   */
  constructor( public readonly model: IfcStepModel ) {}

  /**
   * Get the number of profiles in this.
   *
   * @return {number}
   */
  get length(): number {
    return this.profiles_.size
  }

  /**
   * Add a profile to the cache.
   *
   * @param profile
   */
  public add( profile: CanonicalProfile ) {
    this.profiles_.set( profile.localID, profile )
  }

  /**
   * Get a profile by its local id.
   *
   * @param localID
   * @return {CanonicalProfile | undefined}
   */
  public getByLocalID(localID: number): CanonicalProfile | undefined {
    return this.profiles_.get(localID)
  }

  /**
   * Iterate through the profiles in this.
   *
   * @return {IterableIterator<CanonicalProfile>}
   */
  public [Symbol.iterator](): IterableIterator<CanonicalProfile> {
    return this.profiles_.values()
  }


  /**
   * Get the OBJs for all the curves in the cache (lazily)
   *
   * @yields {[IfcProfileDef, string]} Curves with their matching OBJ as a string
   */
  public* objs() : IterableIterator< [IfcProfileDef, string] > {

    const model = this.model

    for ( const [localID, profile] of this.profiles_ ) {

      const profileItem = model.getElementByLocalID( localID )
      const nativeProfile = profile.nativeProfile

      if ( !( profileItem instanceof IfcProfileDef ) || nativeProfile === void 0 ) {
        continue
      }

      const objFileContents = nativeProfile.dumpToOBJ()

      yield [profileItem, objFileContents]
    }

  }

  /**
   * Dump the OBJs in this to a particular folder
   *
   * @param folder The folder to dump to
   * @return {Promise<void>} A promise to wait on when this completes.
   */
  public async dumpOBJs( folder: string ): Promise< void > {

    await fsPromises.mkdir( folder, { recursive: true })

    const writePromises: Promise< void >[] = []

    for ( const [profileItem, objFileContents] of this.objs() ) {

      const localID = profileItem.localID

      const curveExpressID = profileItem.expressID
      const outputFileName =
        curveExpressID !== void 0 ?
          `${curveExpressID}.obj` :
          `${localID}_inline.obj`

      const outputFilePath = path.join( folder, outputFileName )

      writePromises.push( fsPromises.writeFile( outputFilePath, objFileContents ) )

      if ( writePromises.length >= MAX_FILES_OPEN ) {

        await Promise.all( writePromises )
        writePromises.length = 0
      }
    }

    await Promise.all( writePromises )
  }

  /**
   * Build a set of hashes with their matching IFC curves.
   *
   * @yields {[IfcProfileDef, Uint8Array]} A list of curves with their corresponding hash.
   */
  public* hashes(): IterableIterator< [IfcProfileDef, Uint8Array] >  {

    for ( const [profileItem, objFileContents] of this.objs() ) {

      const objHash = crypto.createHash( 'sha1' ).update( objFileContents ).digest()

      yield [profileItem, objHash]
    }
  }

}
