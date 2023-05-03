
import { IfcDistributionControlElement } from "./index"
import { IfcUnitaryControlElementTypeEnum, IfcUnitaryControlElementTypeEnumDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcunitarycontrolelement.htm */
export  class IfcUnitaryControlElement extends IfcDistributionControlElement {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCUNITARYCONTROLELEMENT
  }
  private PredefinedType_? : IfcUnitaryControlElementTypeEnum | null

  public get PredefinedType() : IfcUnitaryControlElementTypeEnum | null {
    if ( this.PredefinedType_ === void 0 ) {
      this.PredefinedType_ = this.extractLambda( 8, IfcUnitaryControlElementTypeEnumDeserializeStep, true )
    }

    return this.PredefinedType_ as IfcUnitaryControlElementTypeEnum | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCUNITARYCONTROLELEMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCUNITARYCONTROLELEMENT
}
