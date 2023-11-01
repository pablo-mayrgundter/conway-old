
import { geometric_representation_item } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/solid_model.htm */
export  class solid_model extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SOLID_MODEL
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SOLID_MODEL, EntityTypesIfc.CSG_SOLID, EntityTypesIfc.MANIFOLD_SOLID_BREP, EntityTypesIfc.SWEPT_FACE_SOLID, EntityTypesIfc.SWEPT_AREA_SOLID, EntityTypesIfc.SWEPT_DISK_SOLID, EntityTypesIfc.SOLID_REPLICA, EntityTypesIfc.EXTRUDED_FACE_SOLID, EntityTypesIfc.REVOLVED_FACE_SOLID, EntityTypesIfc.REVOLVED_AREA_SOLID, EntityTypesIfc.EXTRUDED_AREA_SOLID, EntityTypesIfc.SURFACE_CURVE_SWEPT_AREA_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SOLID_MODEL
}
