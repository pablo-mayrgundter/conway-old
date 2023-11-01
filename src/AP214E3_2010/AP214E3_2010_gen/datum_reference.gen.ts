
import { datum } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/datum_reference.htm */
export  class datum_reference extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DATUM_REFERENCE
  }
  private precedence_? : number
  private referenced_datum_? : datum

  public get precedence() : number {
    if ( this.precedence_ === void 0 ) {
      this.precedence_ = this.extractNumber( 0, false )
    }

    return this.precedence_ as number
  }

  public get referenced_datum() : datum {
    if ( this.referenced_datum_ === void 0 ) {
      this.referenced_datum_ = this.extractElement( 1, false, datum )
    }

    return this.referenced_datum_ as datum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DATUM_REFERENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DATUM_REFERENCE
}
