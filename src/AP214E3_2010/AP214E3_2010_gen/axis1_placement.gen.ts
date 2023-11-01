
import { placement } from "./index"
import { direction } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/axis1_placement.htm */
export  class axis1_placement extends placement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.AXIS1_PLACEMENT
  }
  private axis_? : direction | null

  public get axis() : direction | null {
    if ( this.axis_ === void 0 ) {
      this.axis_ = this.extractElement( 2, true, direction )
    }

    return this.axis_ as direction | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.AXIS1_PLACEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.AXIS1_PLACEMENT
}
