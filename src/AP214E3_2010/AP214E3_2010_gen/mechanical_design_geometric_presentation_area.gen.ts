
import { presentation_area } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/mechanical_design_geometric_presentation_area.htm */
export  class mechanical_design_geometric_presentation_area extends presentation_area {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MECHANICAL_DESIGN_GEOMETRIC_PRESENTATION_AREA
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MECHANICAL_DESIGN_GEOMETRIC_PRESENTATION_AREA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MECHANICAL_DESIGN_GEOMETRIC_PRESENTATION_AREA
}
