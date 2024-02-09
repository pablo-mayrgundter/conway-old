
import { open_shell } from "./index"
import { face } from "./index"
import {
  conditional_reverse,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class oriented_open_shell extends open_shell {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.ORIENTED_OPEN_SHELL
  }
  private open_shell_element_? : open_shell
  private orientation_? : boolean

  public get open_shell_element() : open_shell {
    if ( this.open_shell_element_ === void 0 ) {
      this.open_shell_element_ = this.extractElement( 2, false, open_shell )
    }

    return this.open_shell_element_ as open_shell
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 3, false )
    }

    return this.orientation_ as boolean
  }

  public get cfs_faces() : Array<face> {
    return conditional_reverse(this?.orientation,this?.open_shell_element.cfs_faces);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.ORIENTED_OPEN_SHELL ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.ORIENTED_OPEN_SHELL
}
