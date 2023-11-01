
import { mapped_item } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/annotation_text.htm */
export  class annotation_text extends mapped_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ANNOTATION_TEXT
  }
  private SELF\mapped_item.mapping_target_? : axis2_placement_2d | axis2_placement_3d

  public get SELF\mapped_item.mapping_target() : axis2_placement_2d | axis2_placement_3d {
    if ( this.SELF\mapped_item.mapping_target_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 3, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.SELF\mapped_item.mapping_target_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.SELF\mapped_item.mapping_target_ as axis2_placement_2d | axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ANNOTATION_TEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ANNOTATION_TEXT
}
