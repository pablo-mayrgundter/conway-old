
import { IfcGeometricRepresentationContext } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcGeometricProjectionEnum, IfcGeometricProjectionEnumDeserializeStep } from "./index"
import { IfcLabel } from "./index"
import { IfcAxis2Placement2D } from "./index"
import { IfcAxis2Placement3D } from "./index"
import { IfcDimensionCount } from "./index"
import { IfcDirection } from "./index"
import { IfcReal } from "./index"
import {
  NVL,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgeometricrepresentationsubcontext.htm */
export  class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT
  }
  private ParentContext_? : IfcGeometricRepresentationContext
  private TargetScale_? : number | null
  private TargetView_? : IfcGeometricProjectionEnum
  private UserDefinedTargetView_? : string | null

  public get ParentContext() : IfcGeometricRepresentationContext {
    if ( this.ParentContext_ === void 0 ) {
      this.ParentContext_ = this.extractElement( 6, false, IfcGeometricRepresentationContext )
    }

    return this.ParentContext_ as IfcGeometricRepresentationContext
  }

  public get TargetScale() : number | null {
    if ( this.TargetScale_ === void 0 ) {
      this.TargetScale_ = this.extractNumber( 7, true )
    }

    return this.TargetScale_ as number | null
  }

  public get TargetView() : IfcGeometricProjectionEnum {
    if ( this.TargetView_ === void 0 ) {
      this.TargetView_ = this.extractLambda( 8, IfcGeometricProjectionEnumDeserializeStep, false )
    }

    return this.TargetView_ as IfcGeometricProjectionEnum
  }

  public get UserDefinedTargetView() : string | null {
    if ( this.UserDefinedTargetView_ === void 0 ) {
      this.UserDefinedTargetView_ = this.extractString( 9, true )
    }

    return this.UserDefinedTargetView_ as string | null
  }

  public get WorldCoordinateSystem() : IfcAxis2Placement2D | IfcAxis2Placement3D {
    return this?.ParentContext?.WorldCoordinateSystem;
  }

  public get CoordinateSpaceDimension() : number {
    return this?.ParentContext?.CoordinateSpaceDimension;
  }


  public get Precision() : number {
    return NVL(this?.ParentContext?.Precision,1.E-5);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT
}
