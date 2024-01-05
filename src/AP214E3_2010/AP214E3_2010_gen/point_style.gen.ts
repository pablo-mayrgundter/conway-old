
import { founded_item } from "./index"
import { label } from "./index"
import { marker_type, marker_typeDeserializeStep } from "./index"
import { pre_defined_marker } from "./index"
import { positive_length_measure } from "./index"
import { measure_with_unit } from "./index"
import { descriptive_measure } from "./index"
import { colour } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/point_style.htm */
export  class point_style extends founded_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.POINT_STYLE
  }
  private name_? : string
  private marker_? : marker_type | pre_defined_marker
  private marker_size_? : positive_length_measure | measure_with_unit | descriptive_measure
  private marker_colour_? : colour

  public get name() : string {
    if ( this.name_ === void 0 ) {
      this.name_ = this.extractString( 0, false )
    }

    return this.name_ as string
  }

  public get marker() : marker_type | pre_defined_marker {
    if ( this.marker_ === void 0 ) {
      
      const enumValue : marker_type | null =
        this.extractLambda( 1, marker_typeDeserializeStep, true )
      const value : StepEntityBase< EntityTypesIfc > | marker_type = enumValue ?? 
        this.extractReference( 1, false )

      if ( enumValue === null && !( value instanceof pre_defined_marker ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.marker_ = value as (marker_type | pre_defined_marker)

    }

    return this.marker_ as marker_type | pre_defined_marker
  }

  public get marker_size() : positive_length_measure | measure_with_unit | descriptive_measure {
    if ( this.marker_size_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > = 
        this.extractReference( 2, false )

      if ( !( value instanceof positive_length_measure ) && !( value instanceof measure_with_unit ) && !( value instanceof descriptive_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.marker_size_ = value as (positive_length_measure | measure_with_unit | descriptive_measure)

    }

    return this.marker_size_ as positive_length_measure | measure_with_unit | descriptive_measure
  }

  public get marker_colour() : colour {
    if ( this.marker_colour_ === void 0 ) {
      this.marker_colour_ = this.extractElement( 3, false, colour )
    }

    return this.marker_colour_ as colour
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.POINT_STYLE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.POINT_STYLE
}
