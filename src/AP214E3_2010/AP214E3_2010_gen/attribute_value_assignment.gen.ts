
import { label } from "./index"
import { text } from "./index"
import { attribute_value_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/attribute_value_assignment.htm */
export abstract class attribute_value_assignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ATTRIBUTE_VALUE_ASSIGNMENT
  }
  private attribute_name_? : string
  private attribute_value_? : label | text
  private role_? : attribute_value_role

  public get attribute_name() : string {
    if ( this.attribute_name_ === void 0 ) {
      this.attribute_name_ = this.extractString( 0, false )
    }

    return this.attribute_name_ as string
  }

  public get attribute_value() : label | text {
    if ( this.attribute_value_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof label ) && !( value instanceof text ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.attribute_value_ = value as (label | text)

    }

    return this.attribute_value_ as label | text
  }

  public get role() : attribute_value_role {
    if ( this.role_ === void 0 ) {
      this.role_ = this.extractElement( 2, false, attribute_value_role )
    }

    return this.role_ as attribute_value_role
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query: EntityTypesIfc[] = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ATTRIBUTE_VALUE_ASSIGNMENT
}
