
import { tolerance_zone } from "./index"
import { shape_aspect } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/tolerance_zone_definition.htm */
export  class tolerance_zone_definition extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.TOLERANCE_ZONE_DEFINITION
  }
  private zone_? : tolerance_zone
  private boundaries_? : Array<shape_aspect>

  public get zone() : tolerance_zone {
    if ( this.zone_ === void 0 ) {
      this.zone_ = this.extractElement( 0, false, tolerance_zone )
    }

    return this.zone_ as tolerance_zone
  }

  public get boundaries() : Array<shape_aspect> {
    if ( this.boundaries_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 1 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return []
      }

      const value : Array<shape_aspect> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1 = this.extractBufferElement( buffer, cursor, endCursor, shape_aspect )
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.boundaries_ = value
    }

    return this.boundaries_ as Array<shape_aspect>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.TOLERANCE_ZONE_DEFINITION, EntityTypesIfc.PROJECTED_ZONE_DEFINITION, EntityTypesIfc.RUNOUT_ZONE_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.TOLERANCE_ZONE_DEFINITION
}
