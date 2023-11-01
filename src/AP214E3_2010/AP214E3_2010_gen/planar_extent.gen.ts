
import { geometric_representation_item } from "./index"
import { length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/planar_extent.htm */
export  class planar_extent extends geometric_representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PLANAR_EXTENT
  }
  private size_in_x_? : number
  private size_in_y_? : number

  public get size_in_x() : number {
    if ( this.size_in_x_ === void 0 ) {
      this.size_in_x_ = this.extractNumber( 1, false )
    }

    return this.size_in_x_ as number
  }

  public get size_in_y() : number {
    if ( this.size_in_y_ === void 0 ) {
      this.size_in_y_ = this.extractNumber( 2, false )
    }

    return this.size_in_y_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PLANAR_EXTENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PLANAR_EXTENT
}
