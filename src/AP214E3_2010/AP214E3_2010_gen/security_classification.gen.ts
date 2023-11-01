
import { label } from "./index"
import { text } from "./index"
import { security_classification_level } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/security_classification.htm */
export  class security_classification extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SECURITY_CLASSIFICATION
  }
  private name_? : string
  private purpose_? : string
  private security_level_? : security_classification_level

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

  public get security_level() : security_classification_level {
    if ( this.security_level_ === void 0 ) {
      this.security_level_ = this.extractElement( 2, false, security_classification_level )
    }

    return this.security_level_ as security_classification_level
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SECURITY_CLASSIFICATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SECURITY_CLASSIFICATION
}
