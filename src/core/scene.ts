import { CanonicalMaterial } from './canonical_material'
import { CanonicalMesh } from './canonical_mesh'
import { NativeTransform } from './native_types'
import { ReadonlyUint32Array } from './readonly_typed_array'
import { SceneNode } from './scene_node'


export interface Scene< BaseEntityType > {

    getByNodeIndex( nodeIndex: number ): SceneNode | undefined

    readonly roots: ReadonlyUint32Array | ReadonlyArray< number >

    walk( walkTemporary?: boolean ):
      IterableIterator<[readonly number[] | undefined,
        NativeTransform | undefined,
        CanonicalMesh,
        CanonicalMaterial | undefined,
        BaseEntityType | undefined]>
}
