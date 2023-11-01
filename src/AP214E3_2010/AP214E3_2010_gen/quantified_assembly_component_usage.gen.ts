
import { assembly_component_usage } from "./index"
import { measure_with_unit } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/quantified_assembly_component_usage.htm */
export  class quantified_assembly_component_usage extends assembly_component_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.QUANTIFIED_ASSEMBLY_COMPONENT_USAGE
  }
  private quantity_? : measure_with_unit

  public get quantity() : measure_with_unit {
    if ( this.quantity_ === void 0 ) {
      this.quantity_ = this.extractElement( 6, false, measure_with_unit )
    }

    return this.quantity_ as measure_with_unit
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.QUANTIFIED_ASSEMBLY_COMPONENT_USAGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.QUANTIFIED_ASSEMBLY_COMPONENT_USAGE
}
