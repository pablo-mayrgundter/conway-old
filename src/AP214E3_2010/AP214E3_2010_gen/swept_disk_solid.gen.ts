
import { solid_model } from "./index"
import { curve } from "./index"
import { positive_length_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/swept_disk_solid.htm */
export  class swept_disk_solid extends solid_model {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SWEPT_DISK_SOLID
  }
  private directrix_? : curve
  private radius_? : number
  private inner_radius_? : number | null
  private start_param_? : number
  private end_param_? : number

  public get directrix() : curve {
    if ( this.directrix_ === void 0 ) {
      this.directrix_ = this.extractElement( 1, false, curve )
    }

    return this.directrix_ as curve
  }

  public get radius() : number {
    if ( this.radius_ === void 0 ) {
      this.radius_ = this.extractNumber( 2, false )
    }

    return this.radius_ as number
  }

  public get inner_radius() : number | null {
    if ( this.inner_radius_ === void 0 ) {
      this.inner_radius_ = this.extractNumber( 3, true )
    }

    return this.inner_radius_ as number | null
  }

  public get start_param() : number {
    if ( this.start_param_ === void 0 ) {
      this.start_param_ = this.extractNumber( 4, false )
    }

    return this.start_param_ as number
  }

  public get end_param() : number {
    if ( this.end_param_ === void 0 ) {
      this.end_param_ = this.extractNumber( 5, false )
    }

    return this.end_param_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SWEPT_DISK_SOLID ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SWEPT_DISK_SOLID
}
