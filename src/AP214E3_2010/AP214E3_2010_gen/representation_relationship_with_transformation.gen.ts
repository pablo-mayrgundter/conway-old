
import { representation_relationship } from "./index"
import { item_defined_transformation } from "./index"
import { functionally_defined_transformation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class representation_relationship_with_transformation extends representation_relationship {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.REPRESENTATION_RELATIONSHIP_WITH_TRANSFORMATION
  }
  private transformation_operator_? : item_defined_transformation | functionally_defined_transformation

  public get transformation_operator() : item_defined_transformation | functionally_defined_transformation {
    if ( this.transformation_operator_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 4, false )

      if ( !( value instanceof item_defined_transformation ) && !( value instanceof functionally_defined_transformation ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.transformation_operator_ = value as (item_defined_transformation | functionally_defined_transformation)

    }

    return this.transformation_operator_ as item_defined_transformation | functionally_defined_transformation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.REPRESENTATION_RELATIONSHIP_WITH_TRANSFORMATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.REPRESENTATION_RELATIONSHIP_WITH_TRANSFORMATION
}
