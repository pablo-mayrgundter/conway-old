
import { curve } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/conic.htm */
export  class conic extends curve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONIC
  }
  private position_? : axis2_placement_2d | axis2_placement_3d

  public get position() : axis2_placement_2d | axis2_placement_3d {
    if ( this.position_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.position_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.position_ as axis2_placement_2d | axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONIC, EntityTypesIfc.CIRCLE, EntityTypesIfc.ELLIPSE, EntityTypesIfc.HYPERBOLA, EntityTypesIfc.PARABOLA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONIC
}
