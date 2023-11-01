
import { dimensional_size } from "./index"
import { angle_relator, angle_relatorDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/angular_size.htm */
export  class angular_size extends dimensional_size {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANGULAR_SIZE
  }
  private angle_selection_? : angle_relator

  public get angle_selection() : angle_relator {
    if ( this.angle_selection_ === void 0 ) {
      this.angle_selection_ = this.extractLambda( 2, angle_relatorDeserializeStep, false )
    }

    return this.angle_selection_ as angle_relator
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANGULAR_SIZE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANGULAR_SIZE
}
