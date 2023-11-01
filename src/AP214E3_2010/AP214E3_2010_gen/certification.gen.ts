
import { label } from "./index"
import { text } from "./index"
import { certification_type } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/certification.htm */
export  class certification extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CERTIFICATION
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CERTIFICATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CERTIFICATION
}
