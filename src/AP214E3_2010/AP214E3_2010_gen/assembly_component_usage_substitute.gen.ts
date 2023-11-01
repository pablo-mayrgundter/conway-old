
import { label } from "./index"
import { text } from "./index"
import { assembly_component_usage } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/assembly_component_usage_substitute.htm */
export  class assembly_component_usage_substitute extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE_SUBSTITUTE
  }
  private name_? : string
  private definition_? : string | null
  private base_? : assembly_component_usage
  private substitute_? : assembly_component_usage

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get definition() : string | null {
    if ( this.definition_ === void 0 ) {
      this.definition_ = this.extractString( 1, true )
    }

    return this.definition_ as string | null
  }

  public get base() : assembly_component_usage {
    if ( this.base_ === void 0 ) {
      this.base_ = this.extractElement( 2, false, assembly_component_usage )
    }

    return this.base_ as assembly_component_usage
  }

  public get substitute() : assembly_component_usage {
    if ( this.substitute_ === void 0 ) {
      this.substitute_ = this.extractElement( 3, false, assembly_component_usage )
    }

    return this.substitute_ as assembly_component_usage
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE_SUBSTITUTE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ASSEMBLY_COMPONENT_USAGE_SUBSTITUTE
}
