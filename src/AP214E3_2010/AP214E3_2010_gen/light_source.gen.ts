
import { geometric_representation_item } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/light_source.htm */
export  class light_source extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIGHT_SOURCE
  }
  private light_colour_? : colour

  public get light_colour() : colour {
    if ( this.light_colour_ === void 0 ) {
      this.light_colour_ = this.extractElement( 1, false, colour )
    }

    return this.light_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIGHT_SOURCE, EntityTypesIfc.LIGHT_SOURCE_AMBIENT, EntityTypesIfc.LIGHT_SOURCE_DIRECTIONAL, EntityTypesIfc.LIGHT_SOURCE_POSITIONAL, EntityTypesIfc.LIGHT_SOURCE_SPOT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIGHT_SOURCE
}
