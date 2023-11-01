
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/limits_and_fits.htm */
export  class limits_and_fits extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.LIMITS_AND_FITS
  }
  private form_variance_? : string
  private zone_variance_? : string
  private grade_? : string
  private source_? : string

  public get form_variance() : string {
    if ( this.form_variance_ === void 0 ) {
      this.form_variance_ = this.extractString( 0, false )
    }

    return this.form_variance_ as string
  }

  public get zone_variance() : string {
    if ( this.zone_variance_ === void 0 ) {
      this.zone_variance_ = this.extractString( 1, false )
    }

    return this.zone_variance_ as string
  }

  public get grade() : string {
    if ( this.grade_ === void 0 ) {
      this.grade_ = this.extractString( 2, false )
    }

    return this.grade_ as string
  }

  public get source() : string {
    if ( this.source_ === void 0 ) {
      this.source_ = this.extractString( 3, false )
    }

    return this.source_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.LIMITS_AND_FITS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.LIMITS_AND_FITS
}
