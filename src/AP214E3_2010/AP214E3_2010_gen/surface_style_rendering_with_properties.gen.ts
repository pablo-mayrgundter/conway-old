
import { surface_style_rendering } from "./index"
import { surface_style_reflectance_ambient } from "./index"
import { surface_style_transparent } from "./index"
import {
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/surface_style_rendering_with_properties.htm */
export  class surface_style_rendering_with_properties extends surface_style_rendering {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SURFACE_STYLE_RENDERING_WITH_PROPERTIES
  }
  private properties_? : Array<surface_style_reflectance_ambient | surface_style_transparent>

  public get properties() : Array<surface_style_reflectance_ambient | surface_style_transparent> {
    if ( this.properties_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<surface_style_reflectance_ambient | surface_style_transparent> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof surface_style_reflectance_ambient ) && !( value1Untyped instanceof surface_style_transparent ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (surface_style_reflectance_ambient | surface_style_transparent)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.properties_ = value
    }

    return this.properties_ as Array<surface_style_reflectance_ambient | surface_style_transparent>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SURFACE_STYLE_RENDERING_WITH_PROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SURFACE_STYLE_RENDERING_WITH_PROPERTIES
}
