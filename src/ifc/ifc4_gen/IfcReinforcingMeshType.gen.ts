
import { IfcReinforcingElementType } from "./index"
import { IfcReinforcingMeshTypeEnum, IfcReinforcingMeshTypeEnumDeserializeStep } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcAreaMeasure } from "./index"
import { IfcLabel } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcPlaneAngleMeasure } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcingmeshtype.htm */
export  class IfcReinforcingMeshType extends IfcReinforcingElementType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREINFORCINGMESHTYPE
  }
  private PredefinedType_? : IfcReinforcingMeshTypeEnum
  private MeshLength_? : number | null
  private MeshWidth_? : number | null
  private LongitudinalBarNominalDiameter_? : number | null
  private TransverseBarNominalDiameter_? : number | null
  private LongitudinalBarCrossSectionArea_? : number | null
  private TransverseBarCrossSectionArea_? : number | null
  private LongitudinalBarSpacing_? : number | null
  private TransverseBarSpacing_? : number | null
  private BendingShapeCode_? : string | null
  private BendingParameters_? : Array<IfcLengthMeasure | IfcPlaneAngleMeasure> | null

  public get PredefinedType() : IfcReinforcingMeshTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcReinforcingMeshTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcReinforcingMeshTypeEnum
  }

  public get MeshLength() : number | null {
    if ( this.MeshLength_ === void 0 ) {
      this.MeshLength_ = this.extractNumber( 10, true )
    }

    return this.MeshLength_ as number | null
  }

  public get MeshWidth() : number | null {
    if ( this.MeshWidth_ === void 0 ) {
      this.MeshWidth_ = this.extractNumber( 11, true )
    }

    return this.MeshWidth_ as number | null
  }

  public get LongitudinalBarNominalDiameter() : number | null {
    if ( this.LongitudinalBarNominalDiameter_ === void 0 ) {
      this.LongitudinalBarNominalDiameter_ = this.extractNumber( 12, true )
    }

    return this.LongitudinalBarNominalDiameter_ as number | null
  }

  public get TransverseBarNominalDiameter() : number | null {
    if ( this.TransverseBarNominalDiameter_ === void 0 ) {
      this.TransverseBarNominalDiameter_ = this.extractNumber( 13, true )
    }

    return this.TransverseBarNominalDiameter_ as number | null
  }

  public get LongitudinalBarCrossSectionArea() : number | null {
    if ( this.LongitudinalBarCrossSectionArea_ === void 0 ) {
      this.LongitudinalBarCrossSectionArea_ = this.extractNumber( 14, true )
    }

    return this.LongitudinalBarCrossSectionArea_ as number | null
  }

  public get TransverseBarCrossSectionArea() : number | null {
    if ( this.TransverseBarCrossSectionArea_ === void 0 ) {
      this.TransverseBarCrossSectionArea_ = this.extractNumber( 15, true )
    }

    return this.TransverseBarCrossSectionArea_ as number | null
  }

  public get LongitudinalBarSpacing() : number | null {
    if ( this.LongitudinalBarSpacing_ === void 0 ) {
      this.LongitudinalBarSpacing_ = this.extractNumber( 16, true )
    }

    return this.LongitudinalBarSpacing_ as number | null
  }

  public get TransverseBarSpacing() : number | null {
    if ( this.TransverseBarSpacing_ === void 0 ) {
      this.TransverseBarSpacing_ = this.extractNumber( 17, true )
    }

    return this.TransverseBarSpacing_ as number | null
  }

  public get BendingShapeCode() : string | null {
    if ( this.BendingShapeCode_ === void 0 ) {
      this.BendingShapeCode_ = this.extractString( 18, true )
    }

    return this.BendingShapeCode_ as string | null
  }

  public get BendingParameters() : Array<IfcLengthMeasure | IfcPlaneAngleMeasure> | null {
    if ( this.BendingParameters_ === void 0 ) {
      this.BendingParameters_ = this.extractLambda( 19, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcLengthMeasure | IfcPlaneAngleMeasure> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcLengthMeasure ) && !( value instanceof IfcPlaneAngleMeasure ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcLengthMeasure | IfcPlaneAngleMeasure)})() )
      }
      return value }, true )
    }

    return this.BendingParameters_ as Array<IfcLengthMeasure | IfcPlaneAngleMeasure> | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREINFORCINGMESHTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREINFORCINGMESHTYPE
}
