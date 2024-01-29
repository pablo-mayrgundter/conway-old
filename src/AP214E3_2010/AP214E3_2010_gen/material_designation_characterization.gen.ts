
import { label } from "./index"
import { text } from "./index"
import { material_designation } from "./index"
import { material_property_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesAP214 from './entity_types_ap214.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// *  */
export  class material_designation_characterization extends StepEntityBase< EntityTypesAP214 > {
  public get type(): EntityTypesAP214 {
    return EntityTypesAP214.MATERIAL_DESIGNATION_CHARACTERIZATION
  }
  private name_? : string
  private description_? : string
  private designation_? : material_designation
  private property_? : material_property_representation

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

  public get designation() : material_designation {
    if ( this.designation_ === void 0 ) {
      this.designation_ = this.extractElement( 2, false, material_designation )
    }

    return this.designation_ as material_designation
  }

  public get property() : material_property_representation {
    if ( this.property_ === void 0 ) {
      
      const value : StepEntityBase< EntityTypesAP214 > = 
        this.extractReference( 3, false )

      if ( !( value instanceof material_property_representation ) ) {
        throw new Error( 'Value in STEP was incorrectly typed for field' )
      }

      this.property_ = value as (material_property_representation)

    }

    return this.property_ as material_property_representation
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesAP214 >,
    model: StepModelBase< EntityTypesAP214, StepEntityBase< EntityTypesAP214 > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesAP214.MATERIAL_DESIGNATION_CHARACTERIZATION ]

  public static readonly expectedType: EntityTypesAP214 =
    EntityTypesAP214.MATERIAL_DESIGNATION_CHARACTERIZATION
}
