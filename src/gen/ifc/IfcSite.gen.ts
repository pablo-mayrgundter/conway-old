
import { IfcSpatialStructureElement } from "./index"
import { IfcCompoundPlaneAngleMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcLabel } from "./index"
import { IfcPostalAddress } from "./index"

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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsite.htm */
export  class IfcSite extends IfcSpatialStructureElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSITE
  }
  private RefLatitude_? : Array< number > | null
  private RefLongitude_? : Array< number > | null
  private RefElevation_? : number | null
  private LandTitleNumber_? : string | null
  private SiteAddress_? : IfcPostalAddress | null

  public get RefLatitude() : Array< number > | null {
    if ( this.RefLatitude_ === void 0 ) {
      this.RefLatitude_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 9 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 9

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
         let value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 )  {
            throw new Error( 'Value in STEP was incorrectly typed' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.RefLatitude_ as Array< number > | null
  }

  public get RefLongitude() : Array< number > | null {
    if ( this.RefLongitude_ === void 0 ) {
      this.RefLongitude_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 10 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 10

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => { 
          let cursor = address
    
         let value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 )  {
            throw new Error( 'Value in STEP was incorrectly typed' )
          }
    
          return value
        })() )
      }

return value })()
    }

    return this.RefLongitude_ as Array< number > | null
  }

  public get RefElevation() : number | null {
    if ( this.RefElevation_ === void 0 ) {
      this.RefElevation_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 11 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 11

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractNumber( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.RefElevation_ as number | null
  }

  public get LandTitleNumber() : string | null {
    if ( this.LandTitleNumber_ === void 0 ) {
      this.LandTitleNumber_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 12 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 12

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

     let value = stepExtractString( buffer, cursor, endCursor )

      if ( value === void 0 ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.LandTitleNumber_ as string | null
  }

  public get SiteAddress() : IfcPostalAddress | null {
    if ( this.SiteAddress_ === void 0 ) {
      this.SiteAddress_ = (() => { 
        this.guaranteeVTable()

      let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >

      if ( 13 >= internalReference.vtableCount ) {
        throw new Error( "Couldn't read field due to too few fields in record" )
      }
            
      let vtableSlot = internalReference.vtableIndex + 13

      let cursor    = internalReference.vtable[ vtableSlot ]
      let buffer    = internalReference.buffer
      let endCursor = buffer.length

       let expressID = stepExtractReference( buffer, cursor, endCursor );
       let value =
         expressID !== void 0 ? this.model.getElementByExpressID( expressID ) :
         this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) )

     if ( !( value instanceof IfcPostalAddress ) ) {
        if ( stepExtractOptional( buffer, cursor, endCursor ) !== null ) {
          throw new Error( 'Value in STEP was incorrectly typed for field' )
        }

        return null
      } else {
        return value
      } })()
    }

    return this.SiteAddress_ as IfcPostalAddress | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSITE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSITE
}
