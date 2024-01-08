
import { geometric_representation_item } from "./index"
import { presentable_text } from "./index"
import { axis2_placement_2d } from "./index"
import { axis2_placement_3d } from "./index"
import { text_alignment } from "./index"
import { text_path, text_pathDeserializeStep } from "./index"
import { pre_defined_text_font } from "./index"
import { externally_defined_text_font } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/text_literal.htm */
export  class text_literal extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TEXT_LITERAL
  }
  private literal_? : string
  private placement_? : axis2_placement_2d | axis2_placement_3d
  private alignment_? : string
  private path_? : text_path
  private font_? : pre_defined_text_font | externally_defined_text_font

  public get literal() : string {
    if ( this.literal_ === void 0 ) {
      this.literal_ = this.extractString( 1, false )
    }

    return this.literal_ as string
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

  public get alignment() : string {
    if ( this.alignment_ === void 0 ) {
      this.alignment_ = this.extractString( 3, false )
    }

    return this.alignment_ as string
  }

  public get path() : text_path {
    if ( this.path_ === void 0 ) {
      this.path_ = this.extractLambda( 4, text_pathDeserializeStep, false )
    }

    return this.path_ as text_path
  }

  public get font() : pre_defined_text_font | externally_defined_text_font {
    if ( this.font_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 5, false )

      if ( !( value instanceof pre_defined_text_font ) && !( value instanceof externally_defined_text_font ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.font_ = value as (pre_defined_text_font | externally_defined_text_font)

    }

    return this.font_ as pre_defined_text_font | externally_defined_text_font
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TEXT_LITERAL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TEXT_LITERAL
}
