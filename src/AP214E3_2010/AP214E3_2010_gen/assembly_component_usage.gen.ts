
import { product_definition_usage } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/assembly_component_usage.htm */
export  class assembly_component_usage extends product_definition_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE
  }
  private reference_designator_? : string | null

  public get reference_designator() : string | null {
    if ( this.reference_designator_ === void 0 ) {
      this.reference_designator_ = this.extractString( 5, true )
    }

    return this.reference_designator_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE, EntityTypesIfc.NEXT_ASSEMBLY_USAGE_OCCURRENCE, EntityTypesIfc.SPECIFIED_HIGHER_USAGE_OCCURRENCE, EntityTypesIfc.PROMISSORY_USAGE_OCCURRENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE
}
