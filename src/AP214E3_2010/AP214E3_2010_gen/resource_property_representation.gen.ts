
import { label } from "./index"
import { text } from "./index"
import { resource_property } from "./index"
import { representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/resource_property_representation.htm */
export  class resource_property_representation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RESOURCE_PROPERTY_REPRESENTATION
  }
  private name_? : string
  private description_? : string
  private property_? : resource_property
  private representation_? : representation

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get property() : resource_property {
    if ( this.property_ === void 0 ) {
      this.property_ = this.extractElement( 2, false, resource_property )
    }

    return this.property_ as resource_property
  }

  public get representation() : representation {
    if ( this.representation_ === void 0 ) {
      this.representation_ = this.extractElement( 3, false, representation )
    }

    return this.representation_ as representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RESOURCE_PROPERTY_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RESOURCE_PROPERTY_REPRESENTATION
}
