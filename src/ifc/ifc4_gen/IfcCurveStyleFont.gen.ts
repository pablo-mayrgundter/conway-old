
import { IfcPresentationItem } from "./index"
import { IfcLabel } from "./index"
import { IfcCurveStyleFontPattern } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurvestylefont.htm */
export  class IfcCurveStyleFont extends IfcPresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCURVESTYLEFONT
  }
  private Name_? : string | null
  private PatternList_? : Array<IfcCurveStyleFontPattern>

  public get Name() : string | null {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 0, true )
    }

    return this.Name_ as string | null
  }

  public get PatternList() : Array<IfcCurveStyleFontPattern> {
    if ( this.PatternList_ === void 0 ) {
      this.PatternList_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcCurveStyleFontPattern> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCurveStyleFontPattern ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.PatternList_ as Array<IfcCurveStyleFontPattern>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCURVESTYLEFONT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCURVESTYLEFONT
}
