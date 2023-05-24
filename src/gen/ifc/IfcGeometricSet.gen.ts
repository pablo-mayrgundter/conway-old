
import { IfcGeometricRepresentationItem } from "./index"
import { IfcCurve } from "./index"
import { IfcPoint } from "./index"
import { IfcSurface } from "./index"
import { IfcDimensionCount } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricset.htm */
export  class IfcGeometricSet extends IfcGeometricRepresentationItem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCGEOMETRICSET
  }
  private Elements_? : Array<IfcCurve | IfcPoint | IfcSurface>

  public get Elements() : Array<IfcCurve | IfcPoint | IfcSurface> {
    if ( this.Elements_ === void 0 ) {
      this.Elements_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcCurve | IfcPoint | IfcSurface> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCurve ) && !( value instanceof IfcPoint ) && !( value instanceof IfcSurface ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcCurve | IfcPoint | IfcSurface)})() )
      }
      return value }, false )
    }

    return this.Elements_ as Array<IfcCurve | IfcPoint | IfcSurface>
  }

  public get Dim() : number {
    return this?.Elements?.[1 - 1].Dim;
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCGEOMETRICSET, EntityTypesIfc.IFCGEOMETRICCURVESET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCGEOMETRICSET
}
