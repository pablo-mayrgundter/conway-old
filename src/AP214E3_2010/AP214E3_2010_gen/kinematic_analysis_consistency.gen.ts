
import { kinematic_control } from "./index"
import { kinematic_analysis_result } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/kinematic_analysis_consistency.htm */
export  class kinematic_analysis_consistency extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.KINEMATIC_ANALYSIS_CONSISTENCY
  }
  private control_? : kinematic_control
  private result_? : kinematic_analysis_result

  public get control() : kinematic_control {
    if ( this.control_ === void 0 ) {
      this.control_ = this.extractElement( 0, false, kinematic_control )
    }

    return this.control_ as kinematic_control
  }

  public get result() : kinematic_analysis_result {
    if ( this.result_ === void 0 ) {
      this.result_ = this.extractElement( 1, false, kinematic_analysis_result )
    }

    return this.result_ as kinematic_analysis_result
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.KINEMATIC_ANALYSIS_CONSISTENCY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.KINEMATIC_ANALYSIS_CONSISTENCY
}
