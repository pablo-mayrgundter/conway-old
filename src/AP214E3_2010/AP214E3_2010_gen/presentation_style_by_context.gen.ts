
import { presentation_style_assignment } from "./index"
import { group } from "./index"
import { presentation_layer_assignment } from "./index"
import { presentation_set } from "./index"
import { representation } from "./index"
import { representation_item } from "./index"
import { shape_representation_relationship } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/presentation_style_by_context.htm */
export  class presentation_style_by_context extends presentation_style_assignment {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRESENTATION_STYLE_BY_CONTEXT
  }
  private style_context_? : group | presentation_layer_assignment | presentation_set | representation | representation_item | shape_representation_relationship

  public get style_context() : group | presentation_layer_assignment | presentation_set | representation | representation_item | shape_representation_relationship {
    if ( this.style_context_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof group ) && !( value instanceof presentation_layer_assignment ) && !( value instanceof presentation_set ) && !( value instanceof representation ) && !( value instanceof representation_item ) && !( value instanceof shape_representation_relationship ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.style_context_ = value as (group | presentation_layer_assignment | presentation_set | representation | representation_item | shape_representation_relationship)

    }

    return this.style_context_ as group | presentation_layer_assignment | presentation_set | representation | representation_item | shape_representation_relationship
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRESENTATION_STYLE_BY_CONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRESENTATION_STYLE_BY_CONTEXT
}
