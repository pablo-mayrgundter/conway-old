
import { shape_aspect } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/dimensional_size.htm */
export  class dimensional_size extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DIMENSIONAL_SIZE
  }
  private applies_to_? : shape_aspect
  private name_? : string

  public get applies_to() : shape_aspect {
    if ( this.applies_to_ === void 0 ) {
      this.applies_to_ = this.extractElement( 0, false, shape_aspect )
    }

    return this.applies_to_ as shape_aspect
  }

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 1, false )
    }

    return this.name_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DIMENSIONAL_SIZE, EntityTypesIfc.ANGULAR_SIZE, EntityTypesIfc.DIMENSIONAL_SIZE_WITH_PATH ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DIMENSIONAL_SIZE
}
