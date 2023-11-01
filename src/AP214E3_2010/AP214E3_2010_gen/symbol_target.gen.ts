
import { geometric_representation_item } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"
import { positive_ratio_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/symbol_target.htm */
export  class symbol_target extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SYMBOL_TARGET
  }
  private placement_? : axis2_placement_2d | axis2_placement_3d
  private x_scale_? : number
  private y_scale_? : number

  public get placement() : axis2_placement_2d | axis2_placement_3d {
    if ( this.placement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.placement_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.placement_ as axis2_placement_2d | axis2_placement_3d
  }

  public get x_scale() : number {
    if ( this.x_scale_ === void 0 ) {
      this.x_scale_ = this.extractNumber( 2, false )
    }

    return this.x_scale_ as number
  }

  public get y_scale() : number {
    if ( this.y_scale_ === void 0 ) {
      this.y_scale_ = this.extractNumber( 3, false )
    }

    return this.y_scale_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SYMBOL_TARGET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SYMBOL_TARGET
}
