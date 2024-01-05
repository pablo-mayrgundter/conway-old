
import { solid_model } from "./index"
import { boolean_result } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/csg_solid.htm */
export  class csg_solid extends solid_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CSG_SOLID
  }
  private tree_root_expression_? : boolean_result | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder

  public get tree_root_expression() : boolean_result | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder {
    if ( this.tree_root_expression_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof boolean_result ) && !( value instanceof sphere ) && !( value instanceof block ) && !( value instanceof right_angular_wedge ) && !( value instanceof torus ) && !( value instanceof right_circular_cone ) && !( value instanceof right_circular_cylinder ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.tree_root_expression_ = value as (boolean_result | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder)

    }

    return this.tree_root_expression_ as boolean_result | sphere | block | right_angular_wedge | torus | right_circular_cone | right_circular_cylinder
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CSG_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CSG_SOLID
}
