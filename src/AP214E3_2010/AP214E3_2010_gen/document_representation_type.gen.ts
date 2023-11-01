
import { label } from "./index"
import { document } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_representation_type.htm */
export  class document_representation_type extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_REPRESENTATION_TYPE
  }
  private name_? : string
  private represented_document_? : document

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get represented_document() : document {
    if ( this.represented_document_ === void 0 ) {
      this.represented_document_ = this.extractElement( 1, false, document )
    }

    return this.represented_document_ as document
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DOCUMENT_REPRESENTATION_TYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_REPRESENTATION_TYPE
}
