import { ConwayGeometry, ParamsLocalPlacement } from
  '../../dependencies/conway-geom/conway_geometry'
import { CanonicalMaterial } from '../core/canonical_material'
import { CanonicalMesh } from '../core/canonical_mesh'
import { Model } from '../core/model'
import { Scene } from '../core/scene'
import {
  SceneNodeModelType,
  SceneNodeGeometry,
  SceneNodeTransform,
}
  from '../core/scene_node'
import { IfcMaterialCache } from './ifc_material_cache'
import IfcStepModel from './ifc_step_model'


export type IfcNativeTransform = { getValues(): Readonly<number[]> }

/**
 *
 */
export class IfcSceneTransform implements SceneNodeTransform {

  readonly type = SceneNodeModelType.TRANSFORM


  /* eslint-disable no-useless-constructor, no-empty-function */
  /**
   *
   * @param model
   * @param transform
   * @param absoluteTransform
   * @param localID
   * @param index
   * @param nativeTransform
   * @param absoluteNativeTransform
   * @param parentIndex
   */
  constructor(
        public readonly model: Model,
        public readonly transform: ReadonlyArray<number>,
        public readonly absoluteTransform: ReadonlyArray<number>,
        public readonly localID: number,
        public readonly index: number,
        public readonly nativeTransform: IfcNativeTransform,
        public readonly absoluteNativeTransform: IfcNativeTransform,
        public readonly parentIndex?: number) { }
  /* eslint-enable no-useless-constructor, no-empty-function */
  public children: number[] = []
}

/**
 *
 */
export class IfcSceneGeometry implements SceneNodeGeometry {

  readonly type = SceneNodeModelType.GEOMETRY

  /* eslint-disable no-useless-constructor, no-empty-function */
  /**
   *
   * @param model
   * @param localID
   * @param index
   * @param parentIndex
   */
  constructor(
        public readonly model: Model,
        public readonly localID: number,
        public readonly index: number,
        public readonly parentIndex?: number) { }
  /* eslint-enable no-useless-constructor, no-empty-function */
}

export type IfcSceneNode = IfcSceneTransform | IfcSceneGeometry

/**
 *
 */
export class IfcSceneBuilder implements Scene {

  public roots: number[] = []

  private scene_: IfcSceneNode[] = []
  private sceneLocalIdMap_ = new Map<number, number>()

  private sceneStack_: IfcSceneTransform[] = []
  private currentParent_?: IfcSceneTransform

  /* eslint-disable no-useless-constructor, no-empty-function */
  /**
   *
   * @param model
   * @param conwayGeometry
   */
  public constructor(
    public readonly model: IfcStepModel,
    public readonly conwayGeometry: ConwayGeometry,
    public readonly materials: IfcMaterialCache) {

  }
  /* eslint-enable no-useless-constructor, no-empty-function */

  /**
   *
   * @param nodeIndex
   * @return {IfcSceneNode | undefined}
   */
  public getByNodeIndex(nodeIndex: number): IfcSceneNode | undefined {
    return this.scene_[nodeIndex]
  }

  /**
   *
   * @param localID
   * @return {IfcSceneNode | undefined}
   */
  private get(localID: number): IfcSceneNode | undefined {

    const sceneID = this.sceneLocalIdMap_.get(localID)

    return sceneID !== void 0 ? this.scene_[sceneID] : void 0
  }

  /**
   *
   */
  public clearParentStack(): void {

    this.sceneStack_.length = 0

    delete this.currentParent_
  }

  /**
   *
   * @param localID
   * @return {IfcSceneTransform | undefined}
   */
  public getTransform(localID: number): IfcSceneTransform | undefined {

    const result = this.get(localID)

    if (result instanceof IfcSceneTransform) {

      return result
    }

    return void 0
  }

  /**
   * @yields
   * @param walkTemporary
   */
  public* walk(walkTemporary: boolean = false):
  IterableIterator<[readonly number[] | undefined,
  IfcNativeTransform | undefined, CanonicalMesh, CanonicalMaterial | undefined]> {

    for (const node of this.scene_) {

      if (node instanceof IfcSceneGeometry) {

        const parentIndex = node.parentIndex

        const geometry = node.model.geometry?.getByLocalID(node.localID)

        if (geometry === void 0) {
          continue
        }

        let parentNode: IfcSceneTransform | undefined

        if (parentIndex !== void 0) {
          parentNode = this.scene_[parentIndex] as IfcSceneTransform
        }

        const material = this.materials.getMaterialByGeometryID( node.localID )

        yield [
          parentNode?.absoluteTransform,
          parentNode?.absoluteNativeTransform,
          geometry,
          material !== void 0 ? material[ 0 ] : void 0,
        ]
      }
    }
  }

  /**
   *
   */
  public popTransform(): void {

    this.currentParent_ = this.sceneStack_.pop()
  }

  /**
   *
   * @param transform
   */
  public pushTransform(transform: IfcSceneTransform) {

    if (this.currentParent_ !== void 0) {
      this.sceneStack_.push(this.currentParent_)
    }

    this.currentParent_ = transform
  }

  /**
   *
   * @param localID
   * @return {IfcSceneGeometry}
   */
  public addGeometry(localID: number): IfcSceneGeometry {

    const nodeIndex = this.scene_.length

    let parentIndex: number | undefined

    if (this.currentParent_ !== void 0) {

      parentIndex = this.currentParent_.index
      this.currentParent_.children.push(nodeIndex)

    } else {

      this.roots.push(nodeIndex)
    }

    const result = new IfcSceneGeometry(this.model, localID, nodeIndex, parentIndex)

    this.scene_.push(result)

    return result
  }

  /**
   *
   * @param localID
   * @param transform
   * @param nativeTransform
   * @return {IfcSceneTransform}
   */
  public addTransform(
      localID: number,
      transform: ReadonlyArray<number>,
      nativeTransform: IfcNativeTransform): IfcSceneTransform {

    if (this.sceneLocalIdMap_.has(localID)) {
      throw Error('Scene already has transform node')
    }

    const nodeIndex = this.scene_.length
    let parentIndex: number | undefined

    let absoluteNativeTransform: IfcNativeTransform

    if (this.currentParent_ !== void 0) {

      const localPlacementParameters: ParamsLocalPlacement = {
        useRelPlacement: true,
        axis2Placement: nativeTransform,
        relPlacement: this.currentParent_.absoluteNativeTransform,
      }

      absoluteNativeTransform = this.conwayGeometry
          .getLocalPlacement(localPlacementParameters)

      parentIndex = this.currentParent_.index
      this.currentParent_.children.push(nodeIndex)

    } else {

      absoluteNativeTransform = nativeTransform
      this.roots.push(nodeIndex)
    }

    const result =
            new IfcSceneTransform(
                this.model,
                transform,
                absoluteNativeTransform.getValues(),
                localID,
                nodeIndex,
                nativeTransform,
                absoluteNativeTransform,
                parentIndex)

    this.scene_.push(result)

    this.sceneLocalIdMap_.set(localID, nodeIndex)

    this.pushTransform(result)

    return result
  }
}
