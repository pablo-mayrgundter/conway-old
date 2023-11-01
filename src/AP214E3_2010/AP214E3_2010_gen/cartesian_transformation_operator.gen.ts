
import { geometric_representation_item } from "./index"
import { direction } from "./index"
import { cartesian_point } from "./index"
import {
  NVL,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/cartesian_transformation_operator.htm */
export  class cartesian_transformation_operator extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR
  }
  private axis1_? : direction | null
  private axis2_? : direction | null
  private local_origin_? : cartesian_point
  private scale_? : number | null

  public get axis1() : direction | null {
    if ( this.axis1_ === void 0 ) {
      this.axis1_ = this.extractElement( 1, true, direction )
    }

    return this.axis1_ as direction | null
  }

  public get axis2() : direction | null {
    if ( this.axis2_ === void 0 ) {
      this.axis2_ = this.extractElement( 2, true, direction )
    }

    return this.axis2_ as direction | null
  }

  public get local_origin() : cartesian_point {
    if ( this.local_origin_ === void 0 ) {
      this.local_origin_ = this.extractElement( 3, false, cartesian_point )
    }

    return this.local_origin_ as cartesian_point
  }

  public get scale() : number | null {
    if ( this.scale_ === void 0 ) {
      this.scale_ = this.extractNumber( 4, true )
    }

    return this.scale_ as number | null
  }

  public get scl() : number {
    return NVL(this?.scale,1.0);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR, EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR_2D, EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR_3D ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CARTESIAN_TRANSFORMATION_OPERATOR
}
