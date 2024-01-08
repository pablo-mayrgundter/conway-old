
import { identifier } from "./index"
import { external_source } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/externally_defined_item.htm */
export  class externally_defined_item extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXTERNALLY_DEFINED_ITEM
  }
  private item_id_? : identifier
  private source_? : external_source

  public get item_id() : identifier {
    if ( this.item_id_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 0, false )

      if ( !( value instanceof identifier ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.item_id_ = value as (identifier)

    }

    return this.item_id_ as identifier
  }

  public get source() : external_source {
    if ( this.source_ === void 0 ) {
      this.source_ = this.extractElement( 1, false, external_source )
    }

    return this.source_ as external_source
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXTERNALLY_DEFINED_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXTERNALLY_DEFINED_ITEM
}
