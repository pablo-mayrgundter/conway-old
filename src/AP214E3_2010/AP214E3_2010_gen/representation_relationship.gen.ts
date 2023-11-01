
import { label } from "./index"
import { text } from "./index"
import { representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/representation_relationship.htm */
export  class representation_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.REPRESENTATION_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private rep_1_? : representation
  private rep_2_? : representation

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get rep_1() : representation {
    if ( this.rep_1_ === void 0 ) {
      this.rep_1_ = this.extractElement( 2, false, representation )
    }

    return this.rep_1_ as representation
  }

  public get rep_2() : representation {
    if ( this.rep_2_ === void 0 ) {
      this.rep_2_ = this.extractElement( 3, false, representation )
    }

    return this.rep_2_ as representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.REPRESENTATION_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.REPRESENTATION_RELATIONSHIP
}
