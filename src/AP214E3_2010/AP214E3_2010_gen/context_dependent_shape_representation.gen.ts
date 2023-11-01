
import { shape_representation_relationship } from "./index"
import { product_definition_shape } from "./index"
import { text } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/context_dependent_shape_representation.htm */
export  class context_dependent_shape_representation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONTEXT_DEPENDENT_SHAPE_REPRESENTATION
  }
  private representation_relation_? : shape_representation_relationship
  private represented_product_relation_? : product_definition_shape

  public get representation_relation() : shape_representation_relationship {
    if ( this.representation_relation_ === void 0 ) {
      this.representation_relation_ = this.extractElement( 0, false, shape_representation_relationship )
    }

    return this.representation_relation_ as shape_representation_relationship
  }

  public get represented_product_relation() : product_definition_shape {
    if ( this.represented_product_relation_ === void 0 ) {
      this.represented_product_relation_ = this.extractElement( 1, false, product_definition_shape )
    }

    return this.represented_product_relation_ as product_definition_shape
  }

  public get description() : string {
    return get_description_value(this);
  }

  public get name() : string {
    return get_name_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONTEXT_DEPENDENT_SHAPE_REPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONTEXT_DEPENDENT_SHAPE_REPRESENTATION
}
