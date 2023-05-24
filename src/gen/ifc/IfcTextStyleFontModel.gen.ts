
import { IfcPreDefinedTextFont } from "./index"
import { IfcTextFontName } from "./index"
import { IfcFontStyle } from "./index"
import { IfcFontVariant } from "./index"
import { IfcFontWeight } from "./index"
import { IfcDescriptiveMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcRatioMeasure } from "./index"
import {
  stepExtractString,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstylefontmodel.htm */
export  class IfcTextStyleFontModel extends IfcPreDefinedTextFont {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTEXTSTYLEFONTMODEL
  }
  private FontFamily_? : Array< string >
  private FontStyle_? : string | null
  private FontVariant_? : string | null
  private FontWeight_? : string | null
  private FontSize_? : IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure

  public get FontFamily() : Array< string > {
    if ( this.FontFamily_ === void 0 ) {
      this.FontFamily_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<string> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractString( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.FontFamily_ as Array< string >
  }

  public get FontStyle() : string | null {
    if ( this.FontStyle_ === void 0 ) {
      this.FontStyle_ = this.extractString( 2, true )
    }

    return this.FontStyle_ as string | null
  }

  public get FontVariant() : string | null {
    if ( this.FontVariant_ === void 0 ) {
      this.FontVariant_ = this.extractString( 3, true )
    }

    return this.FontVariant_ as string | null
  }

  public get FontWeight() : string | null {
    if ( this.FontWeight_ === void 0 ) {
      this.FontWeight_ = this.extractString( 4, true )
    }

    return this.FontWeight_ as string | null
  }

  public get FontSize() : IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure {
    if ( this.FontSize_ === void 0 ) {
      this.FontSize_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      const value : StepEntityBase< EntityTypesIfc > | undefined =
        this.extractBufferReference( buffer, cursor, endCursor )

      if ( !( value instanceof IfcDescriptiveMeasure ) && !( value instanceof IfcLengthMeasure ) && !( value instanceof IfcNormalisedRatioMeasure ) && !( value instanceof IfcPositiveLengthMeasure ) && !( value instanceof IfcPositiveRatioMeasure ) && !( value instanceof IfcRatioMeasure ) ) {
        return ( void 0 )
      }
      return value as (IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure)
}, false )
    }

    return this.FontSize_ as IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTEXTSTYLEFONTMODEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTEXTSTYLEFONTMODEL
}
