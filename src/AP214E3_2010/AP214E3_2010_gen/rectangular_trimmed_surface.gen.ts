
import { bounded_surface } from "./index"
import { surface } from "./index"
import { parameter_value } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/rectangular_trimmed_surface.htm */
export  class rectangular_trimmed_surface extends bounded_surface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.RECTANGULAR_TRIMMED_SURFACE
  }
  private basis_surface_? : surface
  private u1_? : number
  private u2_? : number
  private v1_? : number
  private v2_? : number
  private usense_? : boolean
  private vsense_? : boolean

  public get basis_surface() : surface {
    if ( this.basis_surface_ === void 0 ) {
      this.basis_surface_ = this.extractElement( 1, false, surface )
    }

    return this.basis_surface_ as surface
  }

  public get u1() : number {
    if ( this.u1_ === void 0 ) {
      this.u1_ = this.extractNumber( 2, false )
    }

    return this.u1_ as number
  }

  public get u2() : number {
    if ( this.u2_ === void 0 ) {
      this.u2_ = this.extractNumber( 3, false )
    }

    return this.u2_ as number
  }

  public get v1() : number {
    if ( this.v1_ === void 0 ) {
      this.v1_ = this.extractNumber( 4, false )
    }

    return this.v1_ as number
  }

  public get v2() : number {
    if ( this.v2_ === void 0 ) {
      this.v2_ = this.extractNumber( 5, false )
    }

    return this.v2_ as number
  }

  public get usense() : boolean {
    if ( this.usense_ === void 0 ) {
      this.usense_ = this.extractBoolean( 6, false )
    }

    return this.usense_ as boolean
  }

  public get vsense() : boolean {
    if ( this.vsense_ === void 0 ) {
      this.vsense_ = this.extractBoolean( 7, false )
    }

    return this.vsense_ as boolean
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.RECTANGULAR_TRIMMED_SURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.RECTANGULAR_TRIMMED_SURFACE
}
