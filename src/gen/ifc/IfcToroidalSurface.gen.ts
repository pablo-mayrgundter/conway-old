
import { IfcElementarySurface } from "./index"
import { IfcPositiveLengthMeasure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctoroidalsurface.htm */
export  class IfcToroidalSurface extends IfcElementarySurface {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCTOROIDALSURFACE
  }
  private MajorRadius_? : number
  private MinorRadius_? : number

  public get MajorRadius() : number {
    if ( this.MajorRadius_ === void 0 ) {
      this.MajorRadius_ = this.extractNumber( 1, false )
    }

    return this.MajorRadius_ as number
  }

  public get MinorRadius() : number {
    if ( this.MinorRadius_ === void 0 ) {
      this.MinorRadius_ = this.extractNumber( 2, false )
    }

    return this.MinorRadius_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCTOROIDALSURFACE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCTOROIDALSURFACE
}
