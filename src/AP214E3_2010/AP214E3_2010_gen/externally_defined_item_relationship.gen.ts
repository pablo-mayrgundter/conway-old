
import { label } from "./index"
import { text } from "./index"
import { externally_defined_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/externally_defined_item_relationship.htm */
export  class externally_defined_item_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EXTERNALLY_DEFINED_ITEM_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_item_? : externally_defined_item
  private related_item_? : externally_defined_item

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

  public get relating_item() : externally_defined_item {
    if ( this.relating_item_ === void 0 ) {
      this.relating_item_ = this.extractElement( 2, false, externally_defined_item )
    }

    return this.relating_item_ as externally_defined_item
  }

  public get related_item() : externally_defined_item {
    if ( this.related_item_ === void 0 ) {
      this.related_item_ = this.extractElement( 3, false, externally_defined_item )
    }

    return this.related_item_ as externally_defined_item
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EXTERNALLY_DEFINED_ITEM_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EXTERNALLY_DEFINED_ITEM_RELATIONSHIP
}
