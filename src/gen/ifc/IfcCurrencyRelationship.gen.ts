
import { IfcResourceLevelRelationship } from "./index"
import { IfcMonetaryUnit } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcDateTime } from "./index"
import { IfcLibraryInformation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurrencyrelationship.htm */
export  class IfcCurrencyRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURRENCYRELATIONSHIP
  }
  private RelatingMonetaryUnit_? : IfcMonetaryUnit
  private RelatedMonetaryUnit_? : IfcMonetaryUnit
  private ExchangeRate_? : number
  private RateDateTime_? : string | null
  private RateSource_? : IfcLibraryInformation | null

  public get RelatingMonetaryUnit() : IfcMonetaryUnit {
    if ( this.RelatingMonetaryUnit_ === void 0 ) {
      this.RelatingMonetaryUnit_ = this.extractElement( 2, false, IfcMonetaryUnit )
    }

    return this.RelatingMonetaryUnit_ as IfcMonetaryUnit
  }

  public get RelatedMonetaryUnit() : IfcMonetaryUnit {
    if ( this.RelatedMonetaryUnit_ === void 0 ) {
      this.RelatedMonetaryUnit_ = this.extractElement( 3, false, IfcMonetaryUnit )
    }

    return this.RelatedMonetaryUnit_ as IfcMonetaryUnit
  }

  public get ExchangeRate() : number {
    if ( this.ExchangeRate_ === void 0 ) {
      this.ExchangeRate_ = this.extractNumber( 4, false )
    }

    return this.ExchangeRate_ as number
  }

  public get RateDateTime() : string | null {
    if ( this.RateDateTime_ === void 0 ) {
      this.RateDateTime_ = this.extractString( 5, true )
    }

    return this.RateDateTime_ as string | null
  }

  public get RateSource() : IfcLibraryInformation | null {
    if ( this.RateSource_ === void 0 ) {
      this.RateSource_ = this.extractElement( 6, true, IfcLibraryInformation )
    }

    return this.RateSource_ as IfcLibraryInformation | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURRENCYRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURRENCYRELATIONSHIP
}
