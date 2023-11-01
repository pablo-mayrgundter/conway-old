
import { assembly_component_usage } from "./index"
import { next_assembly_usage_occurrence } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/specified_higher_usage_occurrence.htm */
export  class specified_higher_usage_occurrence extends assembly_component_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SPECIFIED_HIGHER_USAGE_OCCURRENCE
  }
  private upper_usage_? : assembly_component_usage
  private next_usage_? : next_assembly_usage_occurrence

  public get upper_usage() : assembly_component_usage {
    if ( this.upper_usage_ === void 0 ) {
      this.upper_usage_ = this.extractElement( 6, false, assembly_component_usage )
    }

    return this.upper_usage_ as assembly_component_usage
  }

  public get next_usage() : next_assembly_usage_occurrence {
    if ( this.next_usage_ === void 0 ) {
      this.next_usage_ = this.extractElement( 7, false, next_assembly_usage_occurrence )
    }

    return this.next_usage_ as next_assembly_usage_occurrence
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SPECIFIED_HIGHER_USAGE_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SPECIFIED_HIGHER_USAGE_OCCURRENCE
}
