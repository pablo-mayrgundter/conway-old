
import { dimensional_location } from "./index"
import { tolerance_zone_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimension_related_tolerance_zone_element.htm */
export  class dimension_related_tolerance_zone_element extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSION_RELATED_TOLERANCE_ZONE_ELEMENT
  }
  private related_dimension_? : dimensional_location
  private related_element_? : tolerance_zone_definition

  public get related_dimension() : dimensional_location {
    if ( this.related_dimension_ === void 0 ) {
      this.related_dimension_ = this.extractElement( 0, false, dimensional_location )
    }

    return this.related_dimension_ as dimensional_location
  }

  public get related_element() : tolerance_zone_definition {
    if ( this.related_element_ === void 0 ) {
      this.related_element_ = this.extractElement( 1, false, tolerance_zone_definition )
    }

    return this.related_element_ as tolerance_zone_definition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSION_RELATED_TOLERANCE_ZONE_ELEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSION_RELATED_TOLERANCE_ZONE_ELEMENT
}
