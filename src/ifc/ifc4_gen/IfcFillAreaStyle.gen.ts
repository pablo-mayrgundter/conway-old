
import { IfcPresentationStyle } from "./index"
import { IfcColourSpecification } from "./index"
import { IfcPreDefinedColour } from "./index"
import { IfcExternallyDefinedHatchStyle } from "./index"
import { IfcFillAreaStyleHatching } from "./index"
import { IfcFillAreaStyleTiles } from "./index"
import { IfcBoolean } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyle.htm */
export  class IfcFillAreaStyle extends IfcPresentationStyle {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFILLAREASTYLE
  }
  private FillStyles_? : Array<IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles>
  private ModelorDraughting_? : boolean | null

  public get FillStyles() : Array<IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles> {
    if ( this.FillStyles_ === void 0 ) {
      this.FillStyles_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcColourSpecification ) && !( value instanceof IfcPreDefinedColour ) && !( value instanceof IfcExternallyDefinedHatchStyle ) && !( value instanceof IfcFillAreaStyleHatching ) && !( value instanceof IfcFillAreaStyleTiles ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles)})() )
      }
      return value }, false )
    }

    return this.FillStyles_ as Array<IfcColourSpecification | IfcPreDefinedColour | IfcExternallyDefinedHatchStyle | IfcFillAreaStyleHatching | IfcFillAreaStyleTiles>
  }

  public get ModelorDraughting() : boolean | null {
    if ( this.ModelorDraughting_ === void 0 ) {
      this.ModelorDraughting_ = this.extractBoolean( 2, true )
    }

    return this.ModelorDraughting_ as boolean | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFILLAREASTYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFILLAREASTYLE
}
