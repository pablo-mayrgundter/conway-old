
import { edge } from "./index"
import { vertex } from "./index"
import {
  boolean_choose,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/oriented_edge.htm */
export  class oriented_edge extends edge {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.ORIENTED_EDGE
  }
  private edge_element_? : edge
  private orientation_? : boolean

  public get edge_element() : edge {
    if ( this.edge_element_ === void 0 ) {
      this.edge_element_ = this.extractElement( 3, false, edge )
    }

    return this.edge_element_ as edge
  }

  public get orientation() : boolean {
    if ( this.orientation_ === void 0 ) {
      this.orientation_ = this.extractBoolean( 4, false )
    }

    return this.orientation_ as boolean
  }

  public get edge_start() : vertex {
    return boolean_choose(this?.orientation,this?.edge_element.edge_start,this?.edge_element.edge_end);
  }

  public get edge_end() : vertex {
    return boolean_choose(this?.orientation,this?.edge_element.edge_end,this?.edge_element.edge_start);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.ORIENTED_EDGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.ORIENTED_EDGE
}
