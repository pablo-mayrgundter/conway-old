
import { label } from "./index"
import { text } from "./index"
import { action_resource } from "./index"
import { action_resource_requirement } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/resource_property.htm */
export  class resource_property extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RESOURCE_PROPERTY
  }
  private name_? : string
  private description_? : string
  private resource_? : action_resource | action_resource_requirement

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

  public get resource() : action_resource | action_resource_requirement {
    if ( this.resource_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof action_resource ) && !( value instanceof action_resource_requirement ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.resource_ = value as (action_resource | action_resource_requirement)

    }

    return this.resource_ as action_resource | action_resource_requirement
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RESOURCE_PROPERTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RESOURCE_PROPERTY
}
