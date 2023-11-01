
import { dimensional_exponents } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/named_unit.htm */
export  class named_unit extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.NAMED_UNIT
  }
  private dimensions_? : dimensional_exponents

  public get dimensions() : dimensional_exponents {
    if ( this.dimensions_ === void 0 ) {
      this.dimensions_ = this.extractElement( 0, false, dimensional_exponents )
    }

    return this.dimensions_ as dimensional_exponents
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.NAMED_UNIT, EntityTypesIfc.SI_UNIT, EntityTypesIfc.CONVERSION_BASED_UNIT, EntityTypesIfc.CONTEXT_DEPENDENT_UNIT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.NAMED_UNIT
}
