/* eslint-disable no-useless-constructor, no-empty-function */
import { CanonicalMesh, CanonicalMeshType } from '../core/canonical_mesh'
import { ModelGeometry } from '../core/model'
import IfcStepModel from './ifc_step_model'
import path from 'path'
import fsPromises from 'fs/promises'
import { IfcBooleanResult, IfcGeometricRepresentationItem } from './ifc4_gen'
import crypto from 'crypto'


const MAX_FILES_OPEN = 64

/**
 *
 */
export class IfcModelGeometry implements ModelGeometry {

  private readonly meshes_ = new Map<number, CanonicalMesh>()

  /**
   * Construct this with an IFC step model.
   *
   * @param model The model this is from
   */
  constructor( public readonly model: IfcStepModel ) {}

  /**
   * @return {number}
   */
  get length(): number {
    return this.meshes_.size
  }

  /**
   *
   * @param mesh
   */
  public add(mesh: CanonicalMesh) {

    this.meshes_.set(mesh.localID, mesh)
  }

  /**
   * Drop the mesh for a particular local ID
   *
   * @param localID The local ID of the item to delete.
   */
  public delete(localID: number) {

    const value = this.meshes_.get(localID)

    if (value !== void 0) {

      this.meshes_.delete(localID)

      if (value.type === CanonicalMeshType.BUFFER_GEOMETRY) {

        value.geometry.delete()
      }
    }
  }

  /**
   *
   * @param localID
   * @return {CanonicalMesh | undefined}
   */
  public getByLocalID(localID: number): CanonicalMesh | undefined {
    return this.meshes_.get(localID)
  }

  /**
   *
   * @return {IterableIterator<CanonicalMesh>}
   */
  public [Symbol.iterator](): IterableIterator<CanonicalMesh> {
    return this.meshes_.values()
  }

  /**
   *
   * @return {number} - size of the geometry data
   */
  public calculateGeometrySize(): number {
    let size:number = 0

    // eslint-disable-next-line no-unused-vars
    for (const [_, mesh] of this.meshes_) {
      if (mesh.type === CanonicalMeshType.BUFFER_GEOMETRY) {
        const geometryObject = mesh.geometry

        // using * 8 here because the points are being stored as doubles
        // eslint-disable-next-line new-cap,no-magic-numbers
        const pointsDataSize = geometryObject.GetVertexDataSize() * 8

        // eslint-disable-next-line new-cap,no-magic-numbers
        const indexDataSize = geometryObject.GetIndexDataSize() * 4
        size += pointsDataSize + indexDataSize
      }
    }

    return size
  }


  /**
   * Get the OBJs for all the curves in the cache (lazily)
   *
   * @yields {[IfcGeometricRepresentationItem, string]} Curves with their matching OBJ as a string
   */
  public* objs() : IterableIterator< [IfcGeometricRepresentationItem, string] > {

    const model = this.model

    for ( const [localID, mesh] of this.meshes_ ) {

      const geometryItem = model.getElementByLocalID( localID )

      if ( !( geometryItem instanceof IfcGeometricRepresentationItem ) ) {
        continue
      }

      if ( mesh.type !== CanonicalMeshType.BUFFER_GEOMETRY ) {
        continue
      }

      let preamble = `# Mesh for ${geometryItem.toString()}\n`

      if ( geometryItem instanceof IfcBooleanResult ) {

        const firstOperand = geometryItem.FirstOperand.toString()
        const secondOperand = geometryItem.SecondOperand.toString()

        preamble += `# IfcBooleanResult ${firstOperand} ${secondOperand}\n`
      }

      const objFileContents = mesh.geometry.dumpToOBJ( preamble )

      yield [geometryItem, objFileContents]
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

      const curveExpressID = curveItem.expressID
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
   * @yields {[IfcGeometricRepresentationItem, Uint8Array]} A list of curves with
   * their corresponding hash.
   */
  public* hashes(): IterableIterator< [IfcGeometricRepresentationItem, Uint8Array] >  {

    for ( const [curveItem, objFileContents] of this.objs() ) {

      const objHash = crypto.createHash( 'sha1' ).update( objFileContents ).digest()

      yield [curveItem, objHash]
    }
  }

}
