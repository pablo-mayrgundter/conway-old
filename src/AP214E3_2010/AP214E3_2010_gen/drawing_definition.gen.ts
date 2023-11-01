
import { identifier } from "./index"
import { label } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/drawing_definition.htm */
export  class drawing_definition extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.DRAWING_DEFINITION
  }
  private drawing_number_? : string
  private drawing_type_? : string | null

  public get drawing_number() : string {
    if ( this.drawing_number_ === void 0 ) {
      this.drawing_number_ = this.extractString( 0, false )
    }

    return this.drawing_number_ as string
  }

  public get drawing_type() : string | null {
    if ( this.drawing_type_ === void 0 ) {
      this.drawing_type_ = this.extractString( 1, true )
    }

    return this.drawing_type_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.DRAWING_DEFINITION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.DRAWING_DEFINITION
}
