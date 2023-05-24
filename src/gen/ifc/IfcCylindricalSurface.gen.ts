
import { IfcElementarySurface } from "./index"
import { IfcPositiveLengthMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccylindricalsurface.htm */
export  class IfcCylindricalSurface extends IfcElementarySurface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCYLINDRICALSURFACE
  }
  private Radius_? : number

  public get Radius() : number {
    if ( this.Radius_ === void 0 ) {
      this.Radius_ = this.extractNumber( 1, false )
    }

    return this.Radius_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCCYLINDRICALSURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCYLINDRICALSURFACE
}
