
import { kinematic_structure } from "./index"
import { kinematic_link } from "./index"
import { kinematic_property_definition } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/mechanism.htm */
export  class mechanism extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MECHANISM
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MECHANISM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MECHANISM
}
