
import { edge } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/subedge.htm */
export  class subedge extends edge {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SUBEDGE
  }
  private parent_edge_? : edge

  public get parent_edge() : edge {
    if ( this.parent_edge_ === void 0 ) {
      this.parent_edge_ = this.extractElement( 3, false, edge )
    }

    return this.parent_edge_ as edge
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SUBEDGE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SUBEDGE
}
