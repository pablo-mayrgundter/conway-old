
import { light_source } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/light_source_ambient.htm */
export  class light_source_ambient extends light_source {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIGHT_SOURCE_AMBIENT
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIGHT_SOURCE_AMBIENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIGHT_SOURCE_AMBIENT
}
