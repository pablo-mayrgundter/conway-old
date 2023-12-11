
import { representation_item } from "./index"
import { amount_of_substance_measure } from "./index"
import { area_measure } from "./index"
import { celsius_temperature_measure } from "./index"
import { context_dependent_measure } from "./index"
import { count_measure } from "./index"
import { descriptive_measure } from "./index"
import { electric_current_measure } from "./index"
import { length_measure } from "./index"
import { luminous_intensity_measure } from "./index"
import { mass_measure } from "./index"
import { numeric_measure } from "./index"
import { non_negative_length_measure } from "./index"
import { parameter_value } from "./index"
import { plane_angle_measure } from "./index"
import { positive_length_measure } from "./index"
import { positive_plane_angle_measure } from "./index"
import { positive_ratio_measure } from "./index"
import { ratio_measure } from "./index"
import { solid_angle_measure } from "./index"
import { thermodynamic_temperature_measure } from "./index"
import { time_measure } from "./index"
import { volume_measure } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/value_representation_item.htm */
export  class value_representation_item extends representation_item {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.VALUE_REPRESENTATION_ITEM
  }
  private value_component_? : amount_of_substance_measure | area_measure | celsius_temperature_measure | context_dependent_measure | count_measure | descriptive_measure | electric_current_measure | length_measure | luminous_intensity_measure | mass_measure | numeric_measure | non_negative_length_measure | parameter_value | plane_angle_measure | positive_length_measure | positive_plane_angle_measure | positive_ratio_measure | ratio_measure | solid_angle_measure | thermodynamic_temperature_measure | time_measure | volume_measure

  public get value_component() : amount_of_substance_measure | area_measure | celsius_temperature_measure | context_dependent_measure | count_measure | descriptive_measure | electric_current_measure | length_measure | luminous_intensity_measure | mass_measure | numeric_measure | non_negative_length_measure | parameter_value | plane_angle_measure | positive_length_measure | positive_plane_angle_measure | positive_ratio_measure | ratio_measure | solid_angle_measure | thermodynamic_temperature_measure | time_measure | volume_measure {
    if ( this.value_component_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesIfc > =
        this.extractReference( 1, false )

      if ( !( value instanceof amount_of_substance_measure ) && !( value instanceof area_measure ) && !( value instanceof celsius_temperature_measure ) && !( value instanceof context_dependent_measure ) && !( value instanceof count_measure ) && !( value instanceof descriptive_measure ) && !( value instanceof electric_current_measure ) && !( value instanceof length_measure ) && !( value instanceof luminous_intensity_measure ) && !( value instanceof mass_measure ) && !( value instanceof numeric_measure ) && !( value instanceof non_negative_length_measure ) && !( value instanceof parameter_value ) && !( value instanceof plane_angle_measure ) && !( value instanceof positive_length_measure ) && !( value instanceof positive_plane_angle_measure ) && !( value instanceof positive_ratio_measure ) && !( value instanceof ratio_measure ) && !( value instanceof solid_angle_measure ) && !( value instanceof thermodynamic_temperature_measure ) && !( value instanceof time_measure ) && !( value instanceof volume_measure ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.value_component_ = value as (amount_of_substance_measure | area_measure | celsius_temperature_measure | context_dependent_measure | count_measure | descriptive_measure | electric_current_measure | length_measure | luminous_intensity_measure | mass_measure | numeric_measure | non_negative_length_measure | parameter_value | plane_angle_measure | positive_length_measure | positive_plane_angle_measure | positive_ratio_measure | ratio_measure | solid_angle_measure | thermodynamic_temperature_measure | time_measure | volume_measure)

    }

    return this.value_component_ as amount_of_substance_measure | area_measure | celsius_temperature_measure | context_dependent_measure | count_measure | descriptive_measure | electric_current_measure | length_measure | luminous_intensity_measure | mass_measure | numeric_measure | non_negative_length_measure | parameter_value | plane_angle_measure | positive_length_measure | positive_plane_angle_measure | positive_ratio_measure | ratio_measure | solid_angle_measure | thermodynamic_temperature_measure | time_measure | volume_measure
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.VALUE_REPRESENTATION_ITEM ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.VALUE_REPRESENTATION_ITEM
}