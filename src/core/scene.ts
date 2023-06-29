import { ReadonlyUint32Array } from './readonly_typed_array'
import { SceneNode } from './scene_node'


export interface Scene {

    getByNodeIndex( nodeIndex: number ): SceneNode | undefined

    readonly roots: ReadonlyUint32Array | ReadonlyArray< number >
}
