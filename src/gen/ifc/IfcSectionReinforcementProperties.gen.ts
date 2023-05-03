
import { IfcPreDefinedProperties } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcReinforcingBarRoleEnum, IfcReinforcingBarRoleEnumDeserializeStep } from "./index"
import { IfcSectionProperties } from "./index"
import { IfcReinforcementBarProperties } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsectionreinforcementproperties.htm */
export  class IfcSectionReinforcementProperties extends IfcPreDefinedProperties {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES
  }
  private LongitudinalStartPosition_? : number
  private LongitudinalEndPosition_? : number
  private TransversePosition_? : number | null
  private ReinforcementRole_? : IfcReinforcingBarRoleEnum
  private SectionDefinition_? : IfcSectionProperties
  private CrossSectionReinforcementDefinitions_? : Array<IfcReinforcementBarProperties>

  public get LongitudinalStartPosition() : number {
    if ( this.LongitudinalStartPosition_ === void 0 ) {
      this.LongitudinalStartPosition_ = this.extractNumber( 0, false )
    }

    return this.LongitudinalStartPosition_ as number
  }

  public get LongitudinalEndPosition() : number {
    if ( this.LongitudinalEndPosition_ === void 0 ) {
      this.LongitudinalEndPosition_ = this.extractNumber( 1, false )
    }

    return this.LongitudinalEndPosition_ as number
  }

  public get TransversePosition() : number | null {
    if ( this.TransversePosition_ === void 0 ) {
      this.TransversePosition_ = this.extractNumber( 2, true )
    }

    return this.TransversePosition_ as number | null
  }

  public get ReinforcementRole() : IfcReinforcingBarRoleEnum {
    if ( this.ReinforcementRole_ === void 0 ) {
      this.ReinforcementRole_ = this.extractLambda( 3, IfcReinforcingBarRoleEnumDeserializeStep, false )
    }

    return this.ReinforcementRole_ as IfcReinforcingBarRoleEnum
  }

  public get SectionDefinition() : IfcSectionProperties {
    if ( this.SectionDefinition_ === void 0 ) {
      this.SectionDefinition_ = this.extractElement( 4, false, IfcSectionProperties )
    }

    return this.SectionDefinition_ as IfcSectionProperties
  }

  public get CrossSectionReinforcementDefinitions() : Array<IfcReinforcementBarProperties> {
    if ( this.CrossSectionReinforcementDefinitions_ === void 0 ) {
      this.CrossSectionReinforcementDefinitions_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcReinforcementBarProperties> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcReinforcementBarProperties ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.CrossSectionReinforcementDefinitions_ as Array<IfcReinforcementBarProperties>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCSECTIONREINFORCEMENTPROPERTIES
}
