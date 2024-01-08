
import { text_style } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_style_with_mirror.htm */
export  class text_style_with_mirror extends text_style {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_STYLE_WITH_MIRROR
  }
  private mirror_placement_? : axis2_placement_2d | axis2_placement_3d

  public get mirror_placement() : axis2_placement_2d | axis2_placement_3d {
    if ( this.mirror_placement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.mirror_placement_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.mirror_placement_ as axis2_placement_2d | axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_STYLE_WITH_MIRROR ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_STYLE_WITH_MIRROR
}
