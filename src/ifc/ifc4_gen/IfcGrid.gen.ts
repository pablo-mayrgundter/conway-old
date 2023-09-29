
import { IfcProduct } from "./index"
import { IfcGridAxis } from "./index"
import { IfcGridTypeEnum, IfcGridTypeEnumDeserializeStep } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgrid.htm */
export  class IfcGrid extends IfcProduct {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCGRID
  }
  private UAxes_? : Array<IfcGridAxis>
  private VAxes_? : Array<IfcGridAxis>
  private WAxes_? : Array<IfcGridAxis> | null
  private PredefinedType_? : IfcGridTypeEnum | null

  public get UAxes() : Array<IfcGridAxis> {
    if ( this.UAxes_ === void 0 ) {
      this.UAxes_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      let value : Array<IfcGridAxis> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcGridAxis ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.UAxes_ as Array<IfcGridAxis>
  }

  public get VAxes() : Array<IfcGridAxis> {
    if ( this.VAxes_ === void 0 ) {
      this.VAxes_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      let value : Array<IfcGridAxis> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcGridAxis ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.VAxes_ as Array<IfcGridAxis>
  }

  public get WAxes() : Array<IfcGridAxis> | null {
    if ( this.WAxes_ === void 0 ) {
      this.WAxes_ = this.extractLambda( 9, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcGridAxis> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcGridAxis ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.WAxes_ as Array<IfcGridAxis> | null
  }

  public get PredefinedType() : IfcGridTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 10, IfcGridTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcGridTypeEnum | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCGRID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCGRID
}
