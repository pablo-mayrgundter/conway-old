
import { generic_variable } from "./index"
import { variable_semantics } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/environment.htm */
export  class environment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ENVIRONMENT
  }
  private syntactic_representation_? : generic_variable
  private semantics_? : variable_semantics

  public get syntactic_representation() : generic_variable {
    if ( this.syntactic_representation_ === void 0 ) {
      this.syntactic_representation_ = this.extractElement( 0, false, generic_variable )
    }

    return this.syntactic_representation_ as generic_variable
  }

  public get semantics() : variable_semantics {
    if ( this.semantics_ === void 0 ) {
      this.semantics_ = this.extractElement( 1, false, variable_semantics )
    }

    return this.semantics_ as variable_semantics
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ENVIRONMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ENVIRONMENT
}
