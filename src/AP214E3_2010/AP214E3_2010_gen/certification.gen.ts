
import { label } from "./index"
import { text } from "./index"
import { certification_type } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class certification extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.CERTIFICATION
  }
  private name_? : string
  private purpose_? : string
  private kind_? : certification_type

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get purpose() : string {
    if ( this.purpose_ === void 0 ) {
      this.purpose_ = this.extractString( 1, false )
    }

    return this.purpose_ as string
  }

  public get kind() : certification_type {
    if ( this.kind_ === void 0 ) {
      this.kind_ = this.extractElement( 2, false, certification_type )
    }

    return this.kind_ as certification_type
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.CERTIFICATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.CERTIFICATION
}
