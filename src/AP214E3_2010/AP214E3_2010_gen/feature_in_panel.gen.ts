
import { feature_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/feature_in_panel.htm */
export  class feature_in_panel extends feature_definition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.FEATURE_IN_PANEL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.FEATURE_IN_PANEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.FEATURE_IN_PANEL
}
