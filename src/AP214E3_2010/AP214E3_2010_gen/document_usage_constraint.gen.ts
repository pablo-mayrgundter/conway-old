
import { document } from "./index"
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_usage_constraint.htm */
export  class document_usage_constraint extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_USAGE_CONSTRAINT
  }
  private source_? : document
  private subject_element_? : string
  private subject_element_value_? : string

  public get source() : document {
    if ( this.source_ === void 0 ) {
      this.source_ = this.extractElement( 0, false, document )
    }

    return this.source_ as document
  }

  public get subject_element() : string {
    if ( this.subject_element_ === void 0 ) {
      this.subject_element_ = this.extractString( 1, false )
    }

    return this.subject_element_ as string
  }

  public get subject_element_value() : string {
    if ( this.subject_element_value_ === void 0 ) {
      this.subject_element_value_ = this.extractString( 2, false )
    }

    return this.subject_element_value_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DOCUMENT_USAGE_CONSTRAINT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_USAGE_CONSTRAINT
}
