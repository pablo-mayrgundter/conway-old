
import { IfcSystem } from "./index"
import { IfcAnalysisModelTypeEnum, IfcAnalysisModelTypeEnumDeserializeStep } from "./index"
import { IfcAxis2Placement3D } from "./index"
import { IfcStructuralLoadGroup } from "./index"
import { IfcStructuralResultGroup } from "./index"
import { IfcObjectPlacement } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralanalysismodel.htm */
export  class IfcStructuralAnalysisModel extends IfcSystem {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL
  }
  private PredefinedType_? : IfcAnalysisModelTypeEnum
  private OrientationOf2DPlane_? : IfcAxis2Placement3D | null
  private LoadedBy_? : Array<IfcStructuralLoadGroup> | null
  private HasResults_? : Array<IfcStructuralResultGroup> | null
  private SharedPlacement_? : IfcObjectPlacement | null

  public get PredefinedType() : IfcAnalysisModelTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 5, IfcAnalysisModelTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcAnalysisModelTypeEnum
  }

  public get OrientationOf2DPlane() : IfcAxis2Placement3D | null {
    if ( this.OrientationOf2DPlane_ === void 0 ) {
      this.OrientationOf2DPlane_ = this.extractElement( 6, true, IfcAxis2Placement3D )
    }

    return this.OrientationOf2DPlane_ as IfcAxis2Placement3D | null
  }

  public get LoadedBy() : Array<IfcStructuralLoadGroup> | null {
    if ( this.LoadedBy_ === void 0 ) {
      this.LoadedBy_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcStructuralLoadGroup> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcStructuralLoadGroup ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.LoadedBy_ as Array<IfcStructuralLoadGroup> | null
  }

  public get HasResults() : Array<IfcStructuralResultGroup> | null {
    if ( this.HasResults_ === void 0 ) {
      this.HasResults_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcStructuralResultGroup> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcStructuralResultGroup ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.HasResults_ as Array<IfcStructuralResultGroup> | null
  }

  public get SharedPlacement() : IfcObjectPlacement | null {
    if ( this.SharedPlacement_ === void 0 ) {
      this.SharedPlacement_ = this.extractElement( 9, true, IfcObjectPlacement )
    }

    return this.SharedPlacement_ as IfcObjectPlacement | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL
}
