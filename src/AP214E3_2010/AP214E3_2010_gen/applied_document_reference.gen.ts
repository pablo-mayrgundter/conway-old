
import { document_reference } from "./index"
import { action_directive } from "./index"
import { action_method } from "./index"
import { action_relationship } from "./index"
import { applied_action_assignment } from "./index"
import { approval } from "./index"
import { certification } from "./index"
import { class } from "./index"
import { class_system } from "./index"
import { configuration_design } from "./index"
import { configuration_item } from "./index"
import { contract } from "./index"
import { descriptive_representation_item } from "./index"
import { executed_action } from "./index"
import { externally_defined_dimension_definition } from "./index"
import { feature_definition } from "./index"
import { general_property } from "./index"
import { material_designation } from "./index"
import { organization } from "./index"
import { organizational_project } from "./index"
import { person } from "./index"
import { presentation_area } from "./index"
import { process_plan } from "./index"
import { product } from "./index"
import { product_concept } from "./index"
import { product_concept_feature } from "./index"
import { product_concept_feature_category } from "./index"
import { product_definition } from "./index"
import { product_definition_formation } from "./index"
import { product_definition_formation_relationship } from "./index"
import { product_definition_process } from "./index"
import { product_definition_relationship } from "./index"
import { product_definition_substitute } from "./index"
import { product_related_product_category } from "./index"
import { property_definition } from "./index"
import { representation } from "./index"
import { resource_requirement_type } from "./index"
import { retention } from "./index"
import { security_classification } from "./index"
import { shape_aspect } from "./index"
import { shape_aspect_relationship } from "./index"
import { versioned_action_request } from "./index"
import {
  stepExtractArrayToken,
  stepExtractArrayBegin,
  skipValue,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/applied_document_reference.htm */
export  class applied_document_reference extends document_reference {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.APPLIED_DOCUMENT_REFERENCE
  }
  private items_? : Array<action_directive | action_method | action_relationship | applied_action_assignment | approval | certification | class | class_system | configuration_design | configuration_item | contract | descriptive_representation_item | executed_action | externally_defined_dimension_definition | feature_definition | general_property | material_designation | organization | organizational_project | person | presentation_area | process_plan | product | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_formation_relationship | product_definition_process | product_definition_relationship | product_definition_substitute | product_related_product_category | property_definition | representation | resource_requirement_type | retention | security_classification | shape_aspect | shape_aspect_relationship | versioned_action_request>

  public get items() : Array<action_directive | action_method | action_relationship | applied_action_assignment | approval | certification | class | class_system | configuration_design | configuration_item | contract | descriptive_representation_item | executed_action | externally_defined_dimension_definition | feature_definition | general_property | material_designation | organization | organizational_project | person | presentation_area | process_plan | product | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_formation_relationship | product_definition_process | product_definition_relationship | product_definition_substitute | product_related_product_category | property_definition | representation | resource_requirement_type | retention | security_classification | shape_aspect | shape_aspect_relationship | versioned_action_request> {
    if ( this.items_ === void 0 ) {
      
      let   cursor    = this.getOffsetCursor( 2 )
      const buffer    = this.buffer
      const endCursor = buffer.length

      const value : Array<action_directive | action_method | action_relationship | applied_action_assignment | approval | certification | class | class_system | configuration_design | configuration_item | contract | descriptive_representation_item | executed_action | externally_defined_dimension_definition | feature_definition | general_property | material_designation | organization | organizational_project | person | presentation_area | process_plan | product | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_formation_relationship | product_definition_process | product_definition_relationship | product_definition_substitute | product_related_product_category | property_definition | representation | resource_requirement_type | retention | security_classification | shape_aspect | shape_aspect_relationship | versioned_action_request> = []

      let signedCursor0 = stepExtractArrayBegin( buffer, cursor, endCursor )
      cursor = Math.abs( signedCursor0 )

      while ( signedCursor0 >= 0 ) {
        const value1Untyped : StepEntityBase< EntityTypesIfc > | undefined =
          this.extractBufferReference( buffer, cursor, endCursor )

        if ( !( value1Untyped instanceof action_directive ) && !( value1Untyped instanceof action_method ) && !( value1Untyped instanceof action_relationship ) && !( value1Untyped instanceof applied_action_assignment ) && !( value1Untyped instanceof approval ) && !( value1Untyped instanceof certification ) && !( value1Untyped instanceof class ) && !( value1Untyped instanceof class_system ) && !( value1Untyped instanceof configuration_design ) && !( value1Untyped instanceof configuration_item ) && !( value1Untyped instanceof contract ) && !( value1Untyped instanceof descriptive_representation_item ) && !( value1Untyped instanceof executed_action ) && !( value1Untyped instanceof externally_defined_dimension_definition ) && !( value1Untyped instanceof feature_definition ) && !( value1Untyped instanceof general_property ) && !( value1Untyped instanceof material_designation ) && !( value1Untyped instanceof organization ) && !( value1Untyped instanceof organizational_project ) && !( value1Untyped instanceof person ) && !( value1Untyped instanceof presentation_area ) && !( value1Untyped instanceof process_plan ) && !( value1Untyped instanceof product ) && !( value1Untyped instanceof product_concept ) && !( value1Untyped instanceof product_concept_feature ) && !( value1Untyped instanceof product_concept_feature_category ) && !( value1Untyped instanceof product_definition ) && !( value1Untyped instanceof product_definition_formation ) && !( value1Untyped instanceof product_definition_formation_relationship ) && !( value1Untyped instanceof product_definition_process ) && !( value1Untyped instanceof product_definition_relationship ) && !( value1Untyped instanceof product_definition_substitute ) && !( value1Untyped instanceof product_related_product_category ) && !( value1Untyped instanceof property_definition ) && !( value1Untyped instanceof representation ) && !( value1Untyped instanceof resource_requirement_type ) && !( value1Untyped instanceof retention ) && !( value1Untyped instanceof security_classification ) && !( value1Untyped instanceof shape_aspect ) && !( value1Untyped instanceof shape_aspect_relationship ) && !( value1Untyped instanceof versioned_action_request ) ) {
          throw new Error( 'Value in select must be populated' )
        }

        const value1 = value1Untyped as (action_directive | action_method | action_relationship | applied_action_assignment | approval | certification | class | class_system | configuration_design | configuration_item | contract | descriptive_representation_item | executed_action | externally_defined_dimension_definition | feature_definition | general_property | material_designation | organization | organizational_project | person | presentation_area | process_plan | product | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_formation_relationship | product_definition_process | product_definition_relationship | product_definition_substitute | product_related_product_category | property_definition | representation | resource_requirement_type | retention | security_classification | shape_aspect | shape_aspect_relationship | versioned_action_request)
        if ( value1 === void 0 ) {
          throw new Error( 'Value in STEP was incorrectly typed' )
        }
        cursor = skipValue( buffer, cursor, endCursor )
        value.push( value1 )
        signedCursor0 = stepExtractArrayToken( buffer, cursor, endCursor )
        cursor = Math.abs( signedCursor0 )
      }

      this.items_ = value
    }

    return this.items_ as Array<action_directive | action_method | action_relationship | applied_action_assignment | approval | certification | class | class_system | configuration_design | configuration_item | contract | descriptive_representation_item | executed_action | externally_defined_dimension_definition | feature_definition | general_property | material_designation | organization | organizational_project | person | presentation_area | process_plan | product | product_concept | product_concept_feature | product_concept_feature_category | product_definition | product_definition_formation | product_definition_formation_relationship | product_definition_process | product_definition_relationship | product_definition_substitute | product_related_product_category | property_definition | representation | resource_requirement_type | retention | security_classification | shape_aspect | shape_aspect_relationship | versioned_action_request>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.APPLIED_DOCUMENT_REFERENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.APPLIED_DOCUMENT_REFERENCE
}
