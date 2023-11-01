
import { label } from "./index"
import { text } from "./index"
import { geometric_tolerance } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/geometric_tolerance_relationship.htm */
export  class geometric_tolerance_relationship extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.GEOMETRIC_TOLERANCE_RELATIONSHIP
  }
  private name_? : string
  private description_? : string
  private relating_geometric_tolerance_? : geometric_tolerance
  private related_geometric_tolerance_? : geometric_tolerance

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get description() : string {
    if ( this.description_ === void 0 ) {
      this.description_ = this.extractString( 1, false )
    }

    return this.description_ as string
  }

  public get relating_geometric_tolerance() : geometric_tolerance {
    if ( this.relating_geometric_tolerance_ === void 0 ) {
      this.relating_geometric_tolerance_ = this.extractElement( 2, false, geometric_tolerance )
    }

    return this.relating_geometric_tolerance_ as geometric_tolerance
  }

  public get related_geometric_tolerance() : geometric_tolerance {
    if ( this.related_geometric_tolerance_ === void 0 ) {
      this.related_geometric_tolerance_ = this.extractElement( 3, false, geometric_tolerance )
    }

    return this.related_geometric_tolerance_ as geometric_tolerance
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.GEOMETRIC_TOLERANCE_RELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.GEOMETRIC_TOLERANCE_RELATIONSHIP
}
