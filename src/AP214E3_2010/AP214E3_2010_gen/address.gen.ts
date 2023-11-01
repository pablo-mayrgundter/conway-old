
import { label } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/address.htm */
export  class address extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ADDRESS
  }
  private internal_location_? : string | null
  private street_number_? : string | null
  private street_? : string | null
  private postal_box_? : string | null
  private town_? : string | null
  private region_? : string | null
  private postal_code_? : string | null
  private country_? : string | null
  private facsimile_number_? : string | null
  private telephone_number_? : string | null
  private electronic_mail_address_? : string | null
  private telex_number_? : string | null

  public get internal_location() : string | null {
    if ( this.internal_location_ === void 0 ) {
      this.internal_location_ = this.extractString( 0, true )
    }

    return this.internal_location_ as string | null
  }

  public get street_number() : string | null {
    if ( this.street_number_ === void 0 ) {
      this.street_number_ = this.extractString( 1, true )
    }

    return this.street_number_ as string | null
  }

  public get street() : string | null {
    if ( this.street_ === void 0 ) {
      this.street_ = this.extractString( 2, true )
    }

    return this.street_ as string | null
  }

  public get postal_box() : string | null {
    if ( this.postal_box_ === void 0 ) {
      this.postal_box_ = this.extractString( 3, true )
    }

    return this.postal_box_ as string | null
  }

  public get town() : string | null {
    if ( this.town_ === void 0 ) {
      this.town_ = this.extractString( 4, true )
    }

    return this.town_ as string | null
  }

  public get region() : string | null {
    if ( this.region_ === void 0 ) {
      this.region_ = this.extractString( 5, true )
    }

    return this.region_ as string | null
  }

  public get postal_code() : string | null {
    if ( this.postal_code_ === void 0 ) {
      this.postal_code_ = this.extractString( 6, true )
    }

    return this.postal_code_ as string | null
  }

  public get country() : string | null {
    if ( this.country_ === void 0 ) {
      this.country_ = this.extractString( 7, true )
    }

    return this.country_ as string | null
  }

  public get facsimile_number() : string | null {
    if ( this.facsimile_number_ === void 0 ) {
      this.facsimile_number_ = this.extractString( 8, true )
    }

    return this.facsimile_number_ as string | null
  }

  public get telephone_number() : string | null {
    if ( this.telephone_number_ === void 0 ) {
      this.telephone_number_ = this.extractString( 9, true )
    }

    return this.telephone_number_ as string | null
  }

  public get electronic_mail_address() : string | null {
    if ( this.electronic_mail_address_ === void 0 ) {
      this.electronic_mail_address_ = this.extractString( 10, true )
    }

    return this.electronic_mail_address_ as string | null
  }

  public get telex_number() : string | null {
    if ( this.telex_number_ === void 0 ) {
      this.telex_number_ = this.extractString( 11, true )
    }

    return this.telex_number_ as string | null
  }

  public get name() : string {
    return get_name_value(this);
  }

  public get url() : string {
    return get_id_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ADDRESS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ADDRESS
}
