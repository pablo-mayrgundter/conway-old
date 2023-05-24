
import { IfcBoundedCurve } from "./index"
import { IfcCurve } from "./index"
import { IfcCartesianPoint } from "./index"
import { IfcParameterValue } from "./index"
import { IfcBoolean } from "./index"
import { IfcTrimmingPreference, IfcTrimmingPreferenceDeserializeStep } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctrimmedcurve.htm */
export  class IfcTrimmedCurve extends IfcBoundedCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTRIMMEDCURVE
  }
  private BasisCurve_? : IfcCurve
  private Trim1_? : Array<IfcCartesianPoint | IfcParameterValue>
  private Trim2_? : Array<IfcCartesianPoint | IfcParameterValue>
  private SenseAgreement_? : boolean
  private MasterRepresentation_? : IfcTrimmingPreference

  public get BasisCurve() : IfcCurve {
    if ( this.BasisCurve_ === void 0 ) {
      this.BasisCurve_ = this.extractElement( 0, false, IfcCurve )
    }

    return this.BasisCurve_ as IfcCurve
  }

  public get Trim1() : Array<IfcCartesianPoint | IfcParameterValue> {
    if ( this.Trim1_ === void 0 ) {
      this.Trim1_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcCartesianPoint | IfcParameterValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCartesianPoint ) && !( value instanceof IfcParameterValue ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcCartesianPoint | IfcParameterValue)})() )
      }
      return value }, false )
    }

    return this.Trim1_ as Array<IfcCartesianPoint | IfcParameterValue>
  }

  public get Trim2() : Array<IfcCartesianPoint | IfcParameterValue> {
    if ( this.Trim2_ === void 0 ) {
      this.Trim2_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcCartesianPoint | IfcParameterValue> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCartesianPoint ) && !( value instanceof IfcParameterValue ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcCartesianPoint | IfcParameterValue)})() )
      }
      return value }, false )
    }

    return this.Trim2_ as Array<IfcCartesianPoint | IfcParameterValue>
  }

  public get SenseAgreement() : boolean {
    if ( this.SenseAgreement_ === void 0 ) {
      this.SenseAgreement_ = this.extractBoolean( 3, false )
    }

    return this.SenseAgreement_ as boolean
  }

  public get MasterRepresentation() : IfcTrimmingPreference {
    if ( this.MasterRepresentation_ === void 0 ) {
      this.MasterRepresentation_ = this.extractLambda( 4, IfcTrimmingPreferenceDeserializeStep, false )
    }

    return this.MasterRepresentation_ as IfcTrimmingPreference
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTRIMMEDCURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTRIMMEDCURVE
}
