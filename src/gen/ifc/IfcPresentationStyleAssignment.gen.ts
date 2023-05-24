
import { IfcCurveStyle } from "./index"
import { IfcFillAreaStyle } from "./index"
import { IfcNullStyle, IfcNullStyleDeserializeStep } from "./index"
import { IfcSurfaceStyle } from "./index"
import { IfcTextStyle } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpresentationstyleassignment.htm */
export  class IfcPresentationStyleAssignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT
  }
  private Styles_? : Array<IfcCurveStyle | IfcFillAreaStyle | IfcNullStyle | IfcSurfaceStyle | IfcTextStyle>

  public get Styles() : Array<IfcCurveStyle | IfcFillAreaStyle | IfcNullStyle | IfcSurfaceStyle | IfcTextStyle> {
    if ( this.Styles_ === void 0 ) {
      this.Styles_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcCurveStyle | IfcFillAreaStyle | IfcNullStyle | IfcSurfaceStyle | IfcTextStyle> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | IfcNullStyle | undefined =
            this.extractBufferReference( buffer, cursor, endCursor ) ?? IfcNullStyleDeserializeStep( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCurveStyle ) && !( value instanceof IfcFillAreaStyle ) && !( value instanceof IfcSurfaceStyle ) && !( value instanceof IfcTextStyle ) && value !== IfcNullStyle.NULL ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcCurveStyle | IfcFillAreaStyle | IfcNullStyle | IfcSurfaceStyle | IfcTextStyle)})() )
      }
      return value }, false )
    }

    return this.Styles_ as Array<IfcCurveStyle | IfcFillAreaStyle | IfcNullStyle | IfcSurfaceStyle | IfcTextStyle>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT
}
