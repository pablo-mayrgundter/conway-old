
import { configuration_definition } from "./index"
import { interpolation_type, interpolation_typeDeserializeStep } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/configuration_interpolation.htm */
export  class configuration_interpolation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.CONFIGURATION_INTERPOLATION
  }
  private previous_configuration_definition_? : configuration_definition
  private next_configuration_definition_? : configuration_definition
  private interpolation_? : interpolation_type

  public get previous_configuration_definition() : configuration_definition {
    if ( this.previous_configuration_definition_ === void 0 ) {
      this.previous_configuration_definition_ = this.extractElement( 0, false, configuration_definition )
    }

    return this.previous_configuration_definition_ as configuration_definition
  }

  public get next_configuration_definition() : configuration_definition {
    if ( this.next_configuration_definition_ === void 0 ) {
      this.next_configuration_definition_ = this.extractElement( 1, false, configuration_definition )
    }

    return this.next_configuration_definition_ as configuration_definition
  }

  public get interpolation() : interpolation_type {
    if ( this.interpolation_ === void 0 ) {
      this.interpolation_ = this.extractLambda( 2, interpolation_typeDeserializeStep, false )
    }

    return this.interpolation_ as interpolation_type
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.CONFIGURATION_INTERPOLATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.CONFIGURATION_INTERPOLATION
}
