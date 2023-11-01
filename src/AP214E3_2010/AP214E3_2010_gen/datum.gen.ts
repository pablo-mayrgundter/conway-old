
import { shape_aspect } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/datum.htm */
export  class datum extends shape_aspect {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATUM
  }
  private identification_? : string

  public get identification() : string {
    if ( this.identification_ === void 0 ) {
      this.identification_ = this.extractString( 4, false )
    }

    return this.identification_ as string
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DATUM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DATUM
}
