
/* This is generated code, don't alter */
import { positive_length_measure } from "./index"

import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/curve_tolerance_deviation.htm */
export class curve_tolerance_deviation extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CURVE_TOLERANCE_DEVIATION
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
    [ EntityTypesIfc.CURVE_TOLERANCE_DEVIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CURVE_TOLERANCE_DEVIATION
}
