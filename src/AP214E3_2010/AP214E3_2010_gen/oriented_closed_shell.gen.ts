
import { closed_shell } from "./index"
import { face } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/oriented_closed_shell.htm */
export  class oriented_closed_shell extends closed_shell {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORIENTED_CLOSED_SHELL
  }
  private closed_shell_element_? : closed_shell
  private orientation_? : boolean

  public get closed_shell_element() : closed_shell {
    if ( this.closed_shell_element_ === void 0 ) {
      this.closed_shell_element_ = this.extractElement( 2, false, closed_shell )
    }

    return this.closed_shell_element_ as closed_shell
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 3, false )
    }

    return this.orientation_ as boolean
  }

  public get cfs_faces() : Array<face> {
    return conditional_reverse(this?.orientation,this?.closed_shell_element.cfs_faces);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORIENTED_CLOSED_SHELL ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORIENTED_CLOSED_SHELL
}
