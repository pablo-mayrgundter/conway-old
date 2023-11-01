
import { presentation_view } from "./index"
import { presentation_area } from "./index"
import { area_in_set } from "./index"
import { planar_box } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/presentation_size.htm */
export  class presentation_size extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRESENTATION_SIZE
  }
  private unit_? : presentation_view | presentation_area | area_in_set
  private size_? : planar_box

  public get unit() : presentation_view | presentation_area | area_in_set {
    if ( this.unit_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 0, false )

      if ( !( value instanceof presentation_view ) && !( value instanceof presentation_area ) && !( value instanceof area_in_set ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.unit_ = value as (presentation_view | presentation_area | area_in_set)

    }

    return this.unit_ as presentation_view | presentation_area | area_in_set
  }

  public get size() : planar_box {
    if ( this.size_ === void 0 ) {
      this.size_ = this.extractElement( 1, false, planar_box )
    }

    return this.size_ as planar_box
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRESENTATION_SIZE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRESENTATION_SIZE
}
