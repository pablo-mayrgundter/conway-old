
import { founded_item } from "./index"
import { label } from "./index"
import { surface_style_fill_area } from "./index"
import { surface_style_boundary } from "./index"
import { surface_style_silhouette } from "./index"
import { surface_style_segmentation_curve } from "./index"
import { surface_style_control_grid } from "./index"
import { surface_style_parameter_line } from "./index"
import { surface_style_rendering } from "./index"
import {
  stepExtractOptional,
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_side_style.htm */
export  class surface_side_style extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_SIDE_STYLE
  }
  private name_? : string
  private styles_? : Array<surface_style_fill_area | surface_style_boundary | surface_style_silhouette | surface_style_segmentation_curve | surface_style_control_grid | surface_style_parameter_line | surface_style_rendering>

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get styles() : Array<surface_style_fill_area | surface_style_boundary | surface_style_silhouette | surface_style_segmentation_curve | surface_style_control_grid | surface_style_parameter_line | surface_style_rendering> {
    if ( this.styles_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<surface_style_fill_area | surface_style_boundary | surface_style_silhouette | surface_style_segmentation_curve | surface_style_control_grid | surface_style_parameter_line | surface_style_rendering> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof surface_style_fill_area ) && !( value1Untyped instanceof surface_style_boundary ) && !( value1Untyped instanceof surface_style_silhouette ) && !( value1Untyped instanceof surface_style_segmentation_curve ) && !( value1Untyped instanceof surface_style_control_grid ) && !( value1Untyped instanceof surface_style_parameter_line ) && !( value1Untyped instanceof surface_style_rendering ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (surface_style_fill_area | surface_style_boundary | surface_style_silhouette | surface_style_segmentation_curve | surface_style_control_grid | surface_style_parameter_line | surface_style_rendering)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.styles_ = value
    }

    return this.styles_ as Array<surface_style_fill_area | surface_style_boundary | surface_style_silhouette | surface_style_segmentation_curve | surface_style_control_grid | surface_style_parameter_line | surface_style_rendering>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_SIDE_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_SIDE_STYLE
}
