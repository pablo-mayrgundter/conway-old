
import { shape_aspect } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/datum_target.htm */
export  class datum_target extends shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATUM_TARGET
  }
  private target_id_? : string

  public get target_id() : string {
    if ( this.target_id_ === void 0 ) {
      this.target_id_ = this.extractString( 4, false )
    }

    return this.target_id_ as string
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DATUM_TARGET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DATUM_TARGET
}
