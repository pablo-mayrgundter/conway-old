
import { IfcPhysicalSimpleQuantity } from "./index"
import { IfcAreaMeasure } from "./index"
import { IfcLabel } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcquantityarea.htm */
export  class IfcQuantityArea extends IfcPhysicalSimpleQuantity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCQUANTITYAREA
  }
  private AreaValue_? : number
  private Formula_? : string | null

  public get AreaValue() : number {
    if ( this.AreaValue_ === void 0 ) {
      this.AreaValue_ = this.extractNumber( 3, false )
    }

    return this.AreaValue_ as number
  }

  public get Formula() : string | null {
    if ( this.Formula_ === void 0 ) {
      this.Formula_ = this.extractString( 4, true )
    }

    return this.Formula_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCQUANTITYAREA ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCQUANTITYAREA
}
