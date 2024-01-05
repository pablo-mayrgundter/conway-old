
import { label } from "./index"
import { text } from "./index"
import { material_designation } from "./index"
import { material_property_representation } from "./index"

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/material_designation_characterization.htm */
export  class material_designation_characterization extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.MATERIAL_DESIGNATION_CHARACTERIZATION
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
      
      const value : StepEntityBase< EntityTypesIfc > = 
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
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.MATERIAL_DESIGNATION_CHARACTERIZATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.MATERIAL_DESIGNATION_CHARACTERIZATION
}
