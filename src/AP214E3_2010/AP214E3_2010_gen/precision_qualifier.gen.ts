

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/precision_qualifier.htm */
export  class precision_qualifier extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.PRECISION_QUALIFIER
  }
  private precision_value_? : number

  public get precision_value() : number {
    if ( this.precision_value_ === void 0 ) {
      this.precision_value_ = this.extractNumber( 0, false )
    }

    return this.precision_value_ as number
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.PRECISION_QUALIFIER ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.PRECISION_QUALIFIER
}
