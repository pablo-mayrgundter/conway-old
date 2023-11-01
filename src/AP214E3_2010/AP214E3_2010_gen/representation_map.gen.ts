
import { representation_item } from "./index"
import { representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/representation_map.htm */
export  class representation_map extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REPRESENTATION_MAP
  }
  private mapping_origin_? : representation_item
  private mapped_representation_? : representation

  public get mapping_origin() : representation_item {
    if ( this.mapping_origin_ === void 0 ) {
      this.mapping_origin_ = this.extractElement( 0, false, representation_item )
    }

    return this.mapping_origin_ as representation_item
  }

  public get mapped_representation() : representation {
    if ( this.mapped_representation_ === void 0 ) {
      this.mapped_representation_ = this.extractElement( 1, false, representation )
    }

    return this.mapped_representation_ as representation
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REPRESENTATION_MAP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REPRESENTATION_MAP
}
