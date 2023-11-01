
import { label } from "./index"
import { text } from "./index"
import { product_definition } from "./index"
import { assembly_component_usage } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/product_definition_occurrence_relationship.htm */
export  class product_definition_occurrence_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRODUCT_DEFINITION_OCCURRENCE_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private occurrence_? : product_definition
  private occurrence_usage_? : assembly_component_usage

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get occurrence() : product_definition {
    if ( this.occurrence_ === void 0 ) {
      this.occurrence_ = this.extractElement( 2, false, product_definition )
    }

    return this.occurrence_ as product_definition
  }

  public get occurrence_usage() : assembly_component_usage {
    if ( this.occurrence_usage_ === void 0 ) {
      this.occurrence_usage_ = this.extractElement( 3, false, assembly_component_usage )
    }

    return this.occurrence_usage_ as assembly_component_usage
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRODUCT_DEFINITION_OCCURRENCE_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRODUCT_DEFINITION_OCCURRENCE_RELATIONSHIP
}
