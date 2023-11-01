
import { geometric_representation_item } from "./index"
import { axis2_placement_3d } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/block.htm */
export  class block extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BLOCK
  }
  private position_? : axis2_placement_3d
  private x_? : number
  private y_? : number
  private z_? : number

  public get position() : axis2_placement_3d {
    if ( this.position_ === void 0 ) {
      this.position_ = this.extractElement( 1, false, axis2_placement_3d )
    }

    return this.position_ as axis2_placement_3d
  }

  public get x() : number {
    if ( this.x_ === void 0 ) {
      this.x_ = this.extractNumber( 2, false )
    }

    return this.x_ as number
  }

  public get y() : number {
    if ( this.y_ === void 0 ) {
      this.y_ = this.extractNumber( 3, false )
    }

    return this.y_ as number
  }

  public get z() : number {
    if ( this.z_ === void 0 ) {
      this.z_ = this.extractNumber( 4, false )
    }

    return this.z_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BLOCK ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BLOCK
}
