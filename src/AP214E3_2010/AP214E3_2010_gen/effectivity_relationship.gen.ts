
import { label } from "./index"
import { text } from "./index"
import { effectivity } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/effectivity_relationship.htm */
export  class effectivity_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EFFECTIVITY_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private related_effectivity_? : effectivity
  private relating_effectivity_? : effectivity

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get related_effectivity() : effectivity {
    if ( this.related_effectivity_ === void 0 ) {
      this.related_effectivity_ = this.extractElement( 2, false, effectivity )
    }

    return this.related_effectivity_ as effectivity
  }

  public get relating_effectivity() : effectivity {
    if ( this.relating_effectivity_ === void 0 ) {
      this.relating_effectivity_ = this.extractElement( 3, false, effectivity )
    }

    return this.relating_effectivity_ as effectivity
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EFFECTIVITY_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EFFECTIVITY_RELATIONSHIP
}
