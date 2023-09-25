
import { IfcPreDefinedPropertySet } from "./index"
import { IfcLabel } from "./index"
import { IfcSectionReinforcementProperties } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcementdefinitionproperties.htm */
export  class IfcReinforcementDefinitionProperties extends IfcPreDefinedPropertySet {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES
  }
  private DefinitionType_? : string | null
  private ReinforcementSectionDefinitions_? : Array<IfcSectionReinforcementProperties>

  public get DefinitionType() : string | null {
    if ( this.DefinitionType_ === void 0 ) {
      this.DefinitionType_ = this.extractString( 4, true )
    }

    return this.DefinitionType_ as string | null
  }

  public get ReinforcementSectionDefinitions() : Array<IfcSectionReinforcementProperties> {
    if ( this.ReinforcementSectionDefinitions_ === void 0 ) {
      this.ReinforcementSectionDefinitions_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcSectionReinforcementProperties> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcSectionReinforcementProperties ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.ReinforcementSectionDefinitions_ as Array<IfcSectionReinforcementProperties>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES
}
