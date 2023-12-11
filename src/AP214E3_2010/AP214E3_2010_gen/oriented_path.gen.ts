
import { path } from "./index"
import { oriented_edge } from "./index"
import {
  conditional_reverse,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/oriented_path.htm */
export  class oriented_path extends path {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORIENTED_PATH
  }
  private path_element_? : path
  private orientation_? : boolean

  public get path_element() : path {
    if ( this.path_element_ === void 0 ) {
      this.path_element_ = this.extractElement( 2, false, path )
    }

    return this.path_element_ as path
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 3, false )
    }

    return this.orientation_ as boolean
  }

  public get edge_list() : Array<oriented_edge> {
    return conditional_reverse(this?.orientation,this?.path_element.edge_list);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORIENTED_PATH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORIENTED_PATH
}
