
/* This is generated code, don't alter */

import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/v_direction_count.htm */
export class v_direction_count extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.V_DIRECTION_COUNT
  }

  private Value_? : number;

  public get Value() : number {
    if ( this.Value_ === void 0 ) {
      this.Value_ = this.extractNumber( 0, false )
    }

    return this.Value_ as number
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.V_DIRECTION_COUNT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.V_DIRECTION_COUNT
}
