
import { compound_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/default_tolerance_table_cell.htm */
export  class default_tolerance_table_cell extends compound_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DEFAULT_TOLERANCE_TABLE_CELL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DEFAULT_TOLERANCE_TABLE_CELL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DEFAULT_TOLERANCE_TABLE_CELL
}
