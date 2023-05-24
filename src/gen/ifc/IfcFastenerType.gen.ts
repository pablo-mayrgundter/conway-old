
import { IfcElementComponentType } from "./index"
import { IfcFastenerTypeEnum, IfcFastenerTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfastenertype.htm */
export  class IfcFastenerType extends IfcElementComponentType {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCFASTENERTYPE
  }
  private PredefinedType_? : IfcFastenerTypeEnum

  public get PredefinedType() : IfcFastenerTypeEnum {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 9, IfcFastenerTypeEnumDeserializeStep, false )
    }

    return this.PredefinedType_ as IfcFastenerTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCFASTENERTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCFASTENERTYPE
}
