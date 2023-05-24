
import { IfcRelDefines } from "./index"
import { IfcPropertySetDefinition } from "./index"
import { IfcPropertySetTemplate } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreldefinesbytemplate.htm */
export  class IfcRelDefinesByTemplate extends IfcRelDefines {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELDEFINESBYTEMPLATE
  }
  private RelatedPropertySets_? : Array<IfcPropertySetDefinition>
  private RelatingTemplate_? : IfcPropertySetTemplate

  public get RelatedPropertySets() : Array<IfcPropertySetDefinition> {
    if ( this.RelatedPropertySets_ === void 0 ) {
      this.RelatedPropertySets_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      let value : Array<IfcPropertySetDefinition> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPropertySetDefinition ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedPropertySets_ as Array<IfcPropertySetDefinition>
  }

  public get RelatingTemplate() : IfcPropertySetTemplate {
    if ( this.RelatingTemplate_ === void 0 ) {
      this.RelatingTemplate_ = this.extractElement( 5, false, IfcPropertySetTemplate )
    }

    return this.RelatingTemplate_ as IfcPropertySetTemplate
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELDEFINESBYTEMPLATE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELDEFINESBYTEMPLATE
}
