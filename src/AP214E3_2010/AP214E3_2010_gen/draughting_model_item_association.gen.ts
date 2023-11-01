
import { item_identified_representation_usage } from "./index"
import { shape_aspect } from "./index"
import { draughting_model } from "./index"
import { annotation_occurrence } from "./index"
import { draughting_callout } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/draughting_model_item_association.htm */
export  class draughting_model_item_association extends item_identified_representation_usage {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION
  }
  private SELF\item_identified_representation_usage.definition_? : shape_aspect
  private SELF\item_identified_representation_usage.used_representation_? : draughting_model
  private SELF\item_identified_representation_usage.identified_item_? : annotation_occurrence | draughting_callout

  public get SELF\item_identified_representation_usage.definition() : shape_aspect {
    if ( this.SELF\item_identified_representation_usage.definition_ === void 0 ) {
      this.SELF\item_identified_representation_usage.definition_ = this.extractElement( 5, false, shape_aspect )
    }

    return this.SELF\item_identified_representation_usage.definition_ as shape_aspect
  }

  public get SELF\item_identified_representation_usage.used_representation() : draughting_model {
    if ( this.SELF\item_identified_representation_usage.used_representation_ === void 0 ) {
      this.SELF\item_identified_representation_usage.used_representation_ = this.extractElement( 6, false, draughting_model )
    }

    return this.SELF\item_identified_representation_usage.used_representation_ as draughting_model
  }

  public get SELF\item_identified_representation_usage.identified_item() : annotation_occurrence | draughting_callout {
    if ( this.SELF\item_identified_representation_usage.identified_item_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 7, false )

      if ( !( value instanceof annotation_occurrence ) && !( value instanceof draughting_callout ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.SELF\item_identified_representation_usage.identified_item_ = value as (annotation_occurrence | draughting_callout)

    }

    return this.SELF\item_identified_representation_usage.identified_item_ as annotation_occurrence | draughting_callout
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAUGHTING_MODEL_ITEM_ASSOCIATION
}
