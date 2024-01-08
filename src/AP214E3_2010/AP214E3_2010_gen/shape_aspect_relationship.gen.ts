
import { label } from "./index"
import { text } from "./index"
import { shape_aspect } from "./index"
import { identifier } from "./index"
import {
  get_id_value,
} from '../ap214_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/shape_aspect_relationship.htm */
export  class shape_aspect_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.SHAPE_ASPECT_RELATIONSHIP
  }
  private name_? : string
  private description_? : string | null
  private relating_shape_aspect_? : shape_aspect
  private related_shape_aspect_? : shape_aspect

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

  public get relating_shape_aspect() : shape_aspect {
    if ( this.relating_shape_aspect_ === void 0 ) {
      this.relating_shape_aspect_ = this.extractElement( 2, false, shape_aspect )
    }

    return this.relating_shape_aspect_ as shape_aspect
  }

  public get related_shape_aspect() : shape_aspect {
    if ( this.related_shape_aspect_ === void 0 ) {
      this.related_shape_aspect_ = this.extractElement( 3, false, shape_aspect )
    }

    return this.related_shape_aspect_ as shape_aspect
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
    [ EntityTypesIfc.SHAPE_ASPECT_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.SHAPE_ASPECT_RELATIONSHIP
}
