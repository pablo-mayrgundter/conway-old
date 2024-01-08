
import { geometric_representation_item } from "./index"
import { externally_defined_character_glyph } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/defined_character_glyph.htm */
export  class defined_character_glyph extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DEFINED_CHARACTER_GLYPH
  }
  private definition_? : externally_defined_character_glyph
  private placement_? : axis2_placement_2d | axis2_placement_3d

  public get definition() : externally_defined_character_glyph {
    if ( this.definition_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 1, false )

      if ( !( value instanceof externally_defined_character_glyph ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.definition_ = value as (externally_defined_character_glyph)

    }

    return this.definition_ as externally_defined_character_glyph
  }

  public get placement() : axis2_placement_2d | axis2_placement_3d {
    if ( this.placement_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof axis2_placement_2d ) && !( value instanceof axis2_placement_3d ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.placement_ = value as (axis2_placement_2d | axis2_placement_3d)

    }

    return this.placement_ as axis2_placement_2d | axis2_placement_3d
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DEFINED_CHARACTER_GLYPH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DEFINED_CHARACTER_GLYPH
}
