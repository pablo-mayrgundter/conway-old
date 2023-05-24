
import { IfcMaterialDefinition } from "./index"
import { IfcLabel } from "./index"
import { IfcText } from "./index"
import { IfcMaterialProfile } from "./index"
import { IfcCompositeProfileDef } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmaterialprofileset.htm */
export  class IfcMaterialProfileSet extends IfcMaterialDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCMATERIALPROFILESET
  }
  private Name_? : string | null
  private Description_? : string | null
  private MaterialProfiles_? : Array<IfcMaterialProfile>
  private CompositeProfile_? : IfcCompositeProfileDef | null

  public get Name() : string | null {
    if ( this.Name_ === void 0 ) {
      this.Name_ = this.extractString( 0, true )
    }

    return this.Name_ as string | null
  }

  public get Description() : string | null {
    if ( this.Description_ === void 0 ) {
      this.Description_ = this.extractString( 1, true )
    }

    return this.Description_ as string | null
  }

  public get MaterialProfiles() : Array<IfcMaterialProfile> {
    if ( this.MaterialProfiles_ === void 0 ) {
      this.MaterialProfiles_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcMaterialProfile> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcMaterialProfile ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.MaterialProfiles_ as Array<IfcMaterialProfile>
  }

  public get CompositeProfile() : IfcCompositeProfileDef | null {
    if ( this.CompositeProfile_ === void 0 ) {
      this.CompositeProfile_ = this.extractElement( 3, true, IfcCompositeProfileDef )
    }

    return this.CompositeProfile_ as IfcCompositeProfileDef | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALPROFILESET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCMATERIALPROFILESET
}
