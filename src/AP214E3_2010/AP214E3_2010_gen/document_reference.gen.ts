
import { document } from "./index"
import { label } from "./index"
import { object_role } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/document_reference.htm */
export abstract class document_reference extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DOCUMENT_REFERENCE
  }
  private assigned_document_? : document
  private source_? : string

  public get assigned_document() : document {
    if ( this.assigned_document_ === void 0 ) {
      this.assigned_document_ = this.extractElement( 0, false, document )
    }

    return this.assigned_document_ as document
  }

  public get source() : string {
    if ( this.source_ === void 0 ) {
      this.source_ = this.extractString( 1, false )
    }

    return this.source_ as string
  }

  public get role() : object_role {
    return get_role(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [  ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DOCUMENT_REFERENCE
}
