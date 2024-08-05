import { CurveObject } from '../../dependencies/conway-geom/conway_geometry'
import SimpleMemoization from '../core/simple_memoization'
import IfcStepModel from './ifc_step_model'
import path from 'path'
import fsPromises from 'fs/promises'
import { IfcCurve } from './ifc4_gen'
import crypto from 'crypto'


const MAX_FILES_OPEN = 64

/**
 * IFC curve cache, allows dumping OBJ and hashes of curves
 */
export default class IfcModelCurves extends SimpleMemoization< CurveObject > {

  /**
   * Construct this.
   */
  constructor( public readonly model: IfcStepModel ) {
    super()
  }

  /**
   * Get the OBJs for all the curves in the cache (lazily)
   *
   * @yields {[IfcCurve, string]} Curves with their matching OBJ as a string
   */
  public* objs() : IterableIterator< [IfcCurve, string] > {

    const model = this.model

    for ( const [localID, curve] of this ) {

      const curveItem = model.getElementByLocalID( localID )

      if ( !( curveItem instanceof IfcCurve ) ) {
        continue
      }

      const objFileContents = curve.dumpToOBJ()

      yield [curveItem, objFileContents]
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

    for ( const [curveItem, objFileContents] of this.objs() ) {

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
   * @yields {[IfcCurve, Uint8Array]} A list of curves with their corresponding hash.
   */
  public* hashes(): IterableIterator< [IfcCurve, Uint8Array] >  {

    for ( const [curveItem, objFileContents] of this.objs() ) {

      const objHash = crypto.createHash( 'sha1' ).update( objFileContents ).digest()

      yield [curveItem, objHash]
    }
  }
}
