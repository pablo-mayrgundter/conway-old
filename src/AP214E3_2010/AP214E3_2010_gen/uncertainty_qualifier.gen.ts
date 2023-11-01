
import { label } from "./index"
import { text } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/uncertainty_qualifier.htm */
export  class uncertainty_qualifier extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.UNCERTAINTY_QUALIFIER
  }
  private measure_name_? : string
  private description_? : string

  public get measure_name() : string {
    if ( this.measure_name_ === void 0 ) {
      this.measure_name_ = this.extractString( 0, false )
    }

    return this.measure_name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.UNCERTAINTY_QUALIFIER, EntityTypesIfc.STANDARD_UNCERTAINTY, EntityTypesIfc.QUALITATIVE_UNCERTAINTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.UNCERTAINTY_QUALIFIER
}
