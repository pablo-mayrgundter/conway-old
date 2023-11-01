
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/representation_item.htm */
export  class representation_item extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REPRESENTATION_ITEM
  }
  private name_? : string

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REPRESENTATION_ITEM, EntityTypesIfc.COMPOUND_REPRESENTATION_ITEM, EntityTypesIfc.MAPPED_ITEM, EntityTypesIfc.VALUE_REPRESENTATION_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REPRESENTATION_ITEM
}
