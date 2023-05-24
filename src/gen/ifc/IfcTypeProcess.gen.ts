
import { IfcTypeObject } from "./index"
import { IfcIdentifier } from "./index"
import { IfcText } from "./index"
import { IfcLabel } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctypeprocess.htm */
export abstract class IfcTypeProcess extends IfcTypeObject {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTYPEPROCESS
  }
  private Identification_? : string | null
  private LongDescription_? : string | null
  private ProcessType_? : string | null

  public get Identification() : string | null {
    if ( this.Identification_ === void 0 ) {
      this.Identification_ = this.extractString( 6, true )
    }

    return this.Identification_ as string | null
  }

  public get LongDescription() : string | null {
    if ( this.LongDescription_ === void 0 ) {
      this.LongDescription_ = this.extractString( 7, true )
    }

    return this.LongDescription_ as string | null
  }

  public get ProcessType() : string | null {
    if ( this.ProcessType_ === void 0 ) {
      this.ProcessType_ = this.extractString( 8, true )
    }

    return this.ProcessType_ as string | null
  }

  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCEVENTTYPE, EntityTypesIfc.IFCPROCEDURETYPE, EntityTypesIfc.IFCTASKTYPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTYPEPROCESS
}
