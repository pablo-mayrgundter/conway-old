
import { label } from "./index"
import { text } from "./index"
import { product_definition_shape } from "./index"
import { identifier } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/shape_aspect.htm */
export  class shape_aspect extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SHAPE_ASPECT
  }
  private name_? : string
  private description_? : string | null
  private of_shape_? : product_definition_shape
  private product_definitional_? : boolean

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string | null {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, true )
    }

    return this.description_ as string | null
  }

  public get of_shape() : product_definition_shape {
    if ( this.of_shape_ === void 0 ) {
      this.of_shape_ = this.extractElement( 2, false, product_definition_shape )
    }

    return this.of_shape_ as product_definition_shape
  }

  public get product_definitional() : boolean {
    if ( this.product_definitional_ === void 0 ) {
      this.product_definitional_ = this.extractBoolean( 3, false )
    }

    return this.product_definitional_ as boolean
  }

  public get id() : string {
    return get_id_value(this);
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.SHAPE_ASPECT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SHAPE_ASPECT
}
