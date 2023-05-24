
import { IfcRelConnectsElements } from "./index"
import { IfcInteger } from "./index"
import { IfcConnectionTypeEnum, IfcConnectionTypeEnumDeserializeStep } from "./index"
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectspathelements.htm */
export  class IfcRelConnectsPathElements extends IfcRelConnectsElements {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS
  }
  private RelatingPriorities_? : Array< number >
  private RelatedPriorities_? : Array< number >
  private RelatedConnectionType_? : IfcConnectionTypeEnum
  private RelatingConnectionType_? : IfcConnectionTypeEnum

  public get RelatingPriorities() : Array< number > {
    if ( this.RelatingPriorities_ === void 0 ) {
      this.RelatingPriorities_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.RelatingPriorities_ as Array< number >
  }

  public get RelatedPriorities() : Array< number > {
    if ( this.RelatedPriorities_ === void 0 ) {
      this.RelatedPriorities_ = this.extractLambda( 8, (buffer, cursor, endCursor) => {

      let value : Array<number> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value = stepExtractNumber( buffer, cursor, endCursor )
    
          if ( value === void 0 ) {
            throw new Error( 'Value needs to be defined in encapsulating context' )
          }
    
          return value 
        })() )
      }
      return value }, false )
    }

    return this.RelatedPriorities_ as Array< number >
  }

  public get RelatedConnectionType() : IfcConnectionTypeEnum {
    if ( this.RelatedConnectionType_ === void 0 ) {
      this.RelatedConnectionType_ = this.extractLambda( 9, IfcConnectionTypeEnumDeserializeStep, false )
    }

    return this.RelatedConnectionType_ as IfcConnectionTypeEnum
  }

  public get RelatingConnectionType() : IfcConnectionTypeEnum {
    if ( this.RelatingConnectionType_ === void 0 ) {
      this.RelatingConnectionType_ = this.extractLambda( 10, IfcConnectionTypeEnumDeserializeStep, false )
    }

    return this.RelatingConnectionType_ as IfcConnectionTypeEnum
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELCONNECTSPATHELEMENTS
}
