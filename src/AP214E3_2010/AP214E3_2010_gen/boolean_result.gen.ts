
import { geometric_representation_item } from "./index"
import { boolean_operator, boolean_operatorDeserializeStep } from "./index"
import { solid_model } from "./index"
import { half_space_solid } from "./index"
import { sphere } from "./index"
import { block } from "./index"
import { right_angular_wedge } from "./index"
import { torus } from "./index"
import { right_circular_cone } from "./index"
import { right_circular_cylinder } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/boolean_result.htm */
export  class boolean_result extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOOLEAN_RESULT
  }
  private operator_? : boolean_operator
  private first_operand_? : solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result
  private second_operand_? : solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result

  public get operator() : boolean_operator {
    if ( this.operator_ === void 0 ) {
      this.operator_ = this.extractLambda( 1, boolean_operatorDeserializeStep, false )
    }

    return this.operator_ as boolean_operator
  }

  public get first_operand() : solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result {
    if ( this.first_operand_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 2, false )

      if ( !( value instanceof solid_model ) && !( value instanceof half_space_solid ) && !( value instanceof sphere ) && !( value instanceof block ) && !( value instanceof right_angular_wedge ) && !( value instanceof torus ) && !( value instanceof right_circular_cone ) && !( value instanceof right_circular_cylinder ) && !( value instanceof boolean_result ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.first_operand_ = value as (solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result)

    }

    return this.first_operand_ as solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result
  }

  public get second_operand() : solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result {
    if ( this.second_operand_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof solid_model ) && !( value instanceof half_space_solid ) && !( value instanceof sphere ) && !( value instanceof block ) && !( value instanceof right_angular_wedge ) && !( value instanceof torus ) && !( value instanceof right_circular_cone ) && !( value instanceof right_circular_cylinder ) && !( value instanceof boolean_result ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.second_operand_ = value as (solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result)

    }

    return this.second_operand_ as solid_model | half_space_solid | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder | boolean_result
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BOOLEAN_RESULT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOOLEAN_RESULT
}
