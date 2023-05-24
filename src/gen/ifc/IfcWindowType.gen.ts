
import { IfcBuildingElementType } from "./index"
import { IfcWindowTypeEnum, IfcWindowTypeEnumDeserializeStep } from "./index"
import { IfcWindowTypePartitioningEnum, IfcWindowTypePartitioningEnumDeserializeStep } from "./index"
import { IfcBoolean } from "./index"
import { IfcLabel } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcwindowtype.htm */
export  class IfcWindowType extends IfcBuildingElementType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCWINDOWTYPE
  }
  private PredefinedType_? : IfcWindowTypeEnum
  private PartitioningType_? : IfcWindowTypePartitioningEnum
  private ParameterTakesPrecedence_? : boolean | null
  private UserDefinedPartitioningType_? : string | null

  public get PredefinedType() : IfcWindowTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcWindowTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcWindowTypeEnum
  }

  public get PartitioningType() : IfcWindowTypePartitioningEnum {
    if ( this.PartitioningType_ === void 0 ) {
      this.PartitioningType_ = this.extractLambda( 10, IfcWindowTypePartitioningEnumDeserializeStep, false )
    }

    return this.PartitioningType_ as IfcWindowTypePartitioningEnum
  }

  public get ParameterTakesPrecedence() : boolean | null {
    if ( this.ParameterTakesPrecedence_ === void 0 ) {
      this.ParameterTakesPrecedence_ = this.extractBoolean( 11, true )
    }

    return this.ParameterTakesPrecedence_ as boolean | null
  }

  public get UserDefinedPartitioningType() : string | null {
    if ( this.UserDefinedPartitioningType_ === void 0 ) {
      this.UserDefinedPartitioningType_ = this.extractString( 12, true )
    }

    return this.UserDefinedPartitioningType_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCWINDOWTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCWINDOWTYPE
}
