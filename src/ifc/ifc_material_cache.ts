/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { CanonicalMaterial, dumpMTL } from '../core/canonical_material'
import IfcStepModel from './ifc_step_model'
import path from 'path'
import fsPromises from 'fs/promises'
import crypto from 'crypto'
import StepEntityBase from '../step/step_entity_base'
import EntityTypesIfc from './ifc4_gen/entity_types_ifc.gen'


const MAX_FILES_OPEN = 64

/**
 * Cache of materials via their local ID
 */
export class IfcMaterialCache {

  private readonly cache_ =
    new Map< number, CanonicalMaterial >()

  private readonly assignments_ =
    new Map< number, number >()

  readonly relMaterialsMap = new Map<number, number>()
  readonly materialDefinitionsMap = new Map<number, number>()
  readonly styledItemMap = new Map<number, number>()


  /**
   * Construct this with an IFC step model.
   *
   * @param model The model this is from
   */
  constructor( public readonly model: IfcStepModel, public readonly isVoid: boolean = false ) {}

  /**
   * If there is a material for a whole element, this is used to
   * add a default material to that item.
   */
  public defaultMaterialLocalID: number | undefined

  /**
   * Get the number of materials in this.
   *
   * @return {number} The number of materials in this.
   */
  public get size(): number {
    return this.cache_.size
  }

  /**
   * Get the materials in the cache.
   *
   * @return {IterableIterator<[number, CanonicalMaterial]>} The iterator for the
   * local IDs and their respective materials.
   */
  public [Symbol.iterator](): IterableIterator<[number, CanonicalMaterial]> {

    return this.cache_[Symbol.iterator]()
  }

  /**
   * Get the materials in the cache (values only).
   *
   * @return {IterableIterator<CanonicalMaterial>} The iterator for the respective
   * materials.
   */
  public materials(): IterableIterator<CanonicalMaterial> {

    return this.cache_.values()
  }

  /**
   * Add a material to the cache
   *
   * @param localID The local ID of the source material object
   * @param material The canonical material version of the material to add
   */
  public add( localID: number, material: CanonicalMaterial ) {

    this.cache_.set( localID, material )
  }

  /**
   * Get a material by its local ID.
   *
   * @param localID The local ID to fetch a material for.
   * @return {CanonicalMaterial | undefined} The material for the matching local ID
   */
  public get( localID: number ): CanonicalMaterial | undefined {

    return this.cache_.get( localID )
  }

  /**
   * Get a material by its local ID.
   *
   * @param geometryLocalID The local ID of the geometry to fetch
   * @return {[CanonicalMaterial, number] | undefined} A tuple containing the
   * material and its id, or undefined if it is not found.
   */
  public getMaterialIDByGeometryID( geometryLocalID: number ): number | undefined {

    return this.assignments_.get( geometryLocalID )
  }

  /**
   * Assign a particular geometry to a particular material
   *
   * @param geometryLocalID The geometry
   * @param materialLocalID The material
   */
  public addGeometryMapping( geometryLocalID: number, materialLocalID: number ): void {

    this.assignments_.set( geometryLocalID, materialLocalID  )
  }

  /**
   * Map the current geometry to the current default material, if one is set.
   *
   * @param geometryLocalID The geometry ID to add.
   */
  public addDefaultGeometryMapping( geometryLocalID: number ): void {

    const defaultMaterialLocalID = this.defaultMaterialLocalID

    if ( defaultMaterialLocalID !== void 0 ) {

      this.addGeometryMapping( geometryLocalID, defaultMaterialLocalID )
    }
  }

  /**
   * Get a material by its local geometry ID.
   *
   * @param geometryLocalID The local ID of the geometry to get the associated
   * material for.
   * @return {[CanonicalMaterial, number] | undefined} A tuple containing the
   * material and its id, or undefined if it is not found.
   */
  public getMaterialByGeometryID( geometryLocalID: number ) :
    [CanonicalMaterial, number] | undefined {

    const materialID = this.getMaterialIDByGeometryID( geometryLocalID )

    if ( materialID === void 0 ) {
      return
    }

    const material = this.get( materialID )

    if ( material === void 0 ) {
      return
    }

    return [material, materialID]
  }

  /**
   * Get the OBJs for all the curves in the cache (lazily)
   *
   * @yields {[StepEntityBase, string]} Curves with their matching OBJ as a string
   */
  public* mtls() : IterableIterator< [StepEntityBase< EntityTypesIfc >, string] > {

    const model = this.model

    for ( const [localID, material] of this.cache_ ) {

      const materialItem = model.getElementByLocalID( localID )

      if ( materialItem === void 0 ) {
        continue
      }

      const mtlFileContents = dumpMTL( material )

      yield [materialItem, mtlFileContents]
    }
  }

  /**
   * Dump the OBJs in this to a particular folder
   *
   * @param folder The folder to dump to
   * @return {Promise<void>} A promise to wait on when this completes.
   */
  public async dumpMTLs( folder: string ): Promise< void > {

    await fsPromises.mkdir( folder, { recursive: true })

    const writePromises: Promise< void >[] = []

    for ( const [curveItem, objFileContents] of this.mtls() ) {

      const localID = curveItem.localID

      const outputExpressID = curveItem.expressID
      const outputFileName =
        outputExpressID !== void 0 ?
          `${outputExpressID}.obj` :
          `${localID}_inline.obj`

      const RADIX_CHARS = 2

      const outputFolder = path.join(
          folder, outputExpressID !== void 0 ?
            String( outputExpressID ).padStart( RADIX_CHARS, '0' ).substring( 0, RADIX_CHARS ) :
            'inline' )

      await fsPromises.mkdir( outputFolder, { recursive: true } )

      const outputFilePath = path.join( outputFolder, outputFileName )

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
   * @yields {[StepEntityBase, Uint8Array]} A list of curves with
   * their corresponding hash.
   */
  public* hashes(): IterableIterator< [StepEntityBase< EntityTypesIfc >, Uint8Array] >  {

    for ( const [curveItem, objFileContents] of this.mtls() ) {

      const objHash = crypto.createHash( 'sha1' ).update( objFileContents ).digest()

      yield [curveItem, objHash]
    }
  }
}
