import { CanonicalMaterial } from './canonical_material'
import { CanonicalMesh } from './canonical_mesh'
import { NativeTransform4x4 } from '../../dependencies/conway-geom'
import { ReadonlyUint32Array } from './readonly_typed_array'
import { SceneNode } from './scene_node'


export interface Scene< BaseEntityType > {

    getByNodeIndex( nodeIndex: number ): SceneNode | undefined

    readonly roots: ReadonlyUint32Array | ReadonlyArray< number >

    isAllSpaces(): boolean

    walk( includeSpaces?: boolean ):
      IterableIterator<[readonly number[] | undefined,
        NativeTransform4x4 | undefined,
        CanonicalMesh,
        CanonicalMaterial | undefined,
        BaseEntityType | undefined]>
}
