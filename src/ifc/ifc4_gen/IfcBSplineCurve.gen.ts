
import { IfcBoundedCurve } from "./index"
import { IfcInteger } from "./index"
import { IfcCartesianPoint } from "./index"
import { IfcBSplineCurveForm, IfcBSplineCurveFormDeserializeStep } from "./index"
import { IfcLogical } from "./index"
import {
  stepExtractArray,
  SIZEOF,
} from '../../step/parsing/step_deserialization_functions'
import {
  IfcListToArray,
} from '../ifc_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcbsplinecurve.htm */
export abstract class IfcBSplineCurve extends IfcBoundedCurve {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBSPLINECURVE
  }
  private Degree_? : number
  private ControlPointsList_? : Array<IfcCartesianPoint>
  private CurveForm_? : IfcBSplineCurveForm
  private ClosedCurve_? : boolean | null
  private SelfIntersect_? : boolean | null

  public get Degree() : number {
    if ( this.Degree_ === void 0 ) {
      this.Degree_ = this.extractNumber( 0, false )
    }

    return this.Degree_ as number
  }

  public get ControlPointsList() : Array<IfcCartesianPoint> {
    if ( this.ControlPointsList_ === void 0 ) {
      this.ControlPointsList_ = this.extractLambda( 1, (buffer, cursor, endCursor) => {

      let value : Array<IfcCartesianPoint> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcCartesianPoint ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.ControlPointsList_ as Array<IfcCartesianPoint>
  }

  public get CurveForm() : IfcBSplineCurveForm {
    if ( this.CurveForm_ === void 0 ) {
      this.CurveForm_ = this.extractLambda( 2, IfcBSplineCurveFormDeserializeStep, false )
    }

    return this.CurveForm_ as IfcBSplineCurveForm
  }

  public get ClosedCurve() : boolean | null {
    if ( this.ClosedCurve_ === void 0 ) {
      this.ClosedCurve_ = this.extractLogical( 3, false )
    }

    return this.ClosedCurve_ as boolean | null
  }

  public get SelfIntersect() : boolean | null {
    if ( this.SelfIntersect_ === void 0 ) {
      this.SelfIntersect_ = this.extractLogical( 4, false )
    }

    return this.SelfIntersect_ as boolean | null
  }

  public get UpperIndexOnControlPoints() : number {
    return (SIZEOF(this?.ControlPointsList)-1);
  }

  public get ControlPoints() : Array<IfcCartesianPoint> {
    return IfcListToArray(this?.ControlPointsList,0,this?.UpperIndexOnControlPoints);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBSPLINECURVEWITHKNOTS, EntityTypesIfc.IFCRATIONALBSPLINECURVEWITHKNOTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBSPLINECURVE
}
