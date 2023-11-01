

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimensional_exponents.htm */
export  class dimensional_exponents extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSIONAL_EXPONENTS
  }
  private length_exponent_? : number
  private mass_exponent_? : number
  private time_exponent_? : number
  private electric_current_exponent_? : number
  private thermodynamic_temperature_exponent_? : number
  private amount_of_substance_exponent_? : number
  private luminous_intensity_exponent_? : number

  public get length_exponent() : number {
    if ( this.length_exponent_ === void 0 ) {
      this.length_exponent_ = this.extractNumber( 0, false )
    }

    return this.length_exponent_ as number
  }

  public get mass_exponent() : number {
    if ( this.mass_exponent_ === void 0 ) {
      this.mass_exponent_ = this.extractNumber( 1, false )
    }

    return this.mass_exponent_ as number
  }

  public get time_exponent() : number {
    if ( this.time_exponent_ === void 0 ) {
      this.time_exponent_ = this.extractNumber( 2, false )
    }

    return this.time_exponent_ as number
  }

  public get electric_current_exponent() : number {
    if ( this.electric_current_exponent_ === void 0 ) {
      this.electric_current_exponent_ = this.extractNumber( 3, false )
    }

    return this.electric_current_exponent_ as number
  }

  public get thermodynamic_temperature_exponent() : number {
    if ( this.thermodynamic_temperature_exponent_ === void 0 ) {
      this.thermodynamic_temperature_exponent_ = this.extractNumber( 4, false )
    }

    return this.thermodynamic_temperature_exponent_ as number
  }

  public get amount_of_substance_exponent() : number {
    if ( this.amount_of_substance_exponent_ === void 0 ) {
      this.amount_of_substance_exponent_ = this.extractNumber( 5, false )
    }

    return this.amount_of_substance_exponent_ as number
  }

  public get luminous_intensity_exponent() : number {
    if ( this.luminous_intensity_exponent_ === void 0 ) {
      this.luminous_intensity_exponent_ = this.extractNumber( 6, false )
    }

    return this.luminous_intensity_exponent_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSIONAL_EXPONENTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSIONAL_EXPONENTS
}
