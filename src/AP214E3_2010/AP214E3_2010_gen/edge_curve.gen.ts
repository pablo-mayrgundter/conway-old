
import { edge } from "./index"
import { curve } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/edge_curve.htm */
export  class edge_curve extends edge {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.EDGE_CURVE
  }
  private edge_geometry_? : curve
  private same_sense_? : boolean

  public get edge_geometry() : curve {
    if ( this.edge_geometry_ === void 0 ) {
      this.edge_geometry_ = this.extractElement( 3, false, curve )
    }

    return this.edge_geometry_ as curve
  }

  public get same_sense() : boolean {
    if ( this.same_sense_ === void 0 ) {
      this.same_sense_ = this.extractBoolean( 4, false )
    }

    return this.same_sense_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.EDGE_CURVE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.EDGE_CURVE
}
