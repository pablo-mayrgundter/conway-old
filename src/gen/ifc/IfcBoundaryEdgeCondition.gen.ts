
import { IfcBoundaryCondition } from "./index"
import { IfcBoolean } from "./index"
import { IfcModulusOfLinearSubgradeReactionMeasure } from "./index"
import { IfcModulusOfRotationalSubgradeReactionMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from "./entity_types_ifc.gen"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {
  stepExtractBoolean,
  stepExtractEnum,
  stepExtractString,
  stepExtractOptional,
  stepExtractBinary,
  stepExtractReference,
  stepExtractNumber,
  stepExtractInlineElemement,
  stepExtractArray,
  stepExtractLogical,
  NVL,
  HIINDEX,
  SIZEOF
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

import {
  IfcBaseAxis,
  IfcBooleanChoose,
  IfcBuild2Axes,
  IfcBuildAxes,
  IfcConstraintsParamBSpline,
  IfcConvertDirectionInto2D,
  IfcCorrectDimensions,
  IfcCorrectFillAreaStyle,
  IfcCorrectLocalPlacement,
  IfcCorrectObjectAssignment,
  IfcCorrectUnitAssignment,
  IfcCrossProduct,
  IfcCurveDim,
  IfcDeriveDimensionalExponents,
  IfcDimensionsForSiUnit,
  IfcDotProduct,
  IfcFirstProjAxis,
  IfcListToArray,
  IfcLoopHeadToTail,
  IfcMakeArrayOfArray,
  IfcMlsTotalThickness,
  IfcNormalise,
  IfcOrthogonalComplement,
  IfcPathHeadToTail,
  IfcSameAxis2Placement,
  IfcSameCartesianPoint,
  IfcSameDirection,
  IfcSameValidPrecision,
  IfcSameValue,
  IfcScalarTimesVector,
  IfcSecondProjAxis,
  IfcShapeRepresentationTypes,
  IfcTaperedSweptAreaProfiles,
  IfcTopologyRepresentationTypes,
  IfcUniqueDefinitionNames,
  IfcUniquePropertyName,
  IfcUniquePropertySetNames,
  IfcUniqueQuantityNames,
  IfcVectorDifference,
  IfcVectorSum,
  IfcPointListDim,
  IfcGetBasisSurface
} from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundaryedgecondition.htm */
export  class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCBOUNDARYEDGECONDITION
  }
  private TranslationalStiffnessByLengthX_? : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  private TranslationalStiffnessByLengthY_? : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  private TranslationalStiffnessByLengthZ_? : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthX_? : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthY_? : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null
  private RotationalStiffnessByLengthZ_? : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null

  public get TranslationalStiffnessByLengthX() : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthX_ === void 0 ) {
      this.TranslationalStiffnessByLengthX_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 1 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 1

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByLengthX_ as IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByLengthY() : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthY_ === void 0 ) {
      this.TranslationalStiffnessByLengthY_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 2 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 2

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByLengthY_ as IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get TranslationalStiffnessByLengthZ() : IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null {
    if ( this.TranslationalStiffnessByLengthZ_ === void 0 ) {
      this.TranslationalStiffnessByLengthZ_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 3 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 3

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure);
      } })()
    }

    return this.TranslationalStiffnessByLengthZ_ as IfcBoolean|IfcModulusOfLinearSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthX() : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthX_ === void 0 ) {
      this.RotationalStiffnessByLengthX_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 4 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 4

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure);
      } })()
    }

    return this.RotationalStiffnessByLengthX_ as IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthY() : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthY_ === void 0 ) {
      this.RotationalStiffnessByLengthY_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 5 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 5

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure);
      } })()
    }

    return this.RotationalStiffnessByLengthY_ as IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null
  }

  public get RotationalStiffnessByLengthZ() : IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null {
    if ( this.RotationalStiffnessByLengthZ_ === void 0 ) {
      this.RotationalStiffnessByLengthZ_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 6 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 6

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      let expressID = stepExtractReference( buffer, cursor, endCursor );
      let value : StepEntityBase< EntityTypesIfc > | undefined =
        expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
        (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )))

      if ( !( value instanceof IfcBoolean ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value as (IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure);
      } })()
    }

    return this.RotationalStiffnessByLengthZ_ as IfcBoolean|IfcModulusOfRotationalSubgradeReactionMeasure | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCBOUNDARYEDGECONDITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCBOUNDARYEDGECONDITION
}
