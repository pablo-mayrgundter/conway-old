
import { kinematic_structure } from "./index"
import { kinematic_link } from "./index"
import { kinematic_property_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class mechanism extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.MECHANISM
  }
  private structure_definition_? : kinematic_structure
  private base_? : kinematic_link
  private containing_property_? : kinematic_property_definition

  public get structure_definition() : kinematic_structure {
    if ( this.structure_definition_ === void 0 ) {
      this.structure_definition_ = this.extractElement( 0, false, kinematic_structure )
    }

    return this.structure_definition_ as kinematic_structure
  }

  public get base() : kinematic_link {
    if ( this.base_ === void 0 ) {
      this.base_ = this.extractElement( 1, false, kinematic_link )
    }

    return this.base_ as kinematic_link
  }

  public get containing_property() : kinematic_property_definition {
    if ( this.containing_property_ === void 0 ) {
      this.containing_property_ = this.extractElement( 2, false, kinematic_property_definition )
    }

    return this.containing_property_ as kinematic_property_definition
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.MECHANISM ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.MECHANISM
}
