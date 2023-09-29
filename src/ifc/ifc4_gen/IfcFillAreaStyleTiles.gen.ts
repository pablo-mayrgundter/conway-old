
import { IfcGeometricRepresentationItem } from "./index"
import { IfcVector } from "./index"
import { IfcStyledItem } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyletiles.htm */
export  class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFILLAREASTYLETILES
  }
  private TilingPattern_? : Array<IfcVector>
  private Tiles_? : Array<IfcStyledItem>
  private TilingScale_? : number

  public get TilingPattern() : Array<IfcVector> {
    if ( this.TilingPattern_ === void 0 ) {
      this.TilingPattern_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcVector> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcVector ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.TilingPattern_ as Array<IfcVector>
  }

  public get Tiles() : Array<IfcStyledItem> {
    if ( this.Tiles_ === void 0 ) {
      this.Tiles_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcStyledItem> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcStyledItem ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Tiles_ as Array<IfcStyledItem>
  }

  public get TilingScale() : number {
    if ( this.TilingScale_ === void 0 ) {
      this.TilingScale_ = this.extractNumber( 2, false )
    }

    return this.TilingScale_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFILLAREASTYLETILES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFILLAREASTYLETILES
}
