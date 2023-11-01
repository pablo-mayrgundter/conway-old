
import { founded_item } from "./index"
import { cartesian_point } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/box_domain.htm */
export  class box_domain extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.BOX_DOMAIN
  }
  private corner_? : cartesian_point
  private xlength_? : number
  private ylength_? : number
  private zlength_? : number

  public get corner() : cartesian_point {
    if ( this.corner_ === void 0 ) {
      this.corner_ = this.extractElement( 0, false, cartesian_point )
    }

    return this.corner_ as cartesian_point
  }

  public get xlength() : number {
    if ( this.xlength_ === void 0 ) {
      this.xlength_ = this.extractNumber( 1, false )
    }

    return this.xlength_ as number
  }

  public get ylength() : number {
    if ( this.ylength_ === void 0 ) {
      this.ylength_ = this.extractNumber( 2, false )
    }

    return this.ylength_ as number
  }

  public get zlength() : number {
    if ( this.zlength_ === void 0 ) {
      this.zlength_ = this.extractNumber( 3, false )
    }

    return this.zlength_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.BOX_DOMAIN ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.BOX_DOMAIN
}
