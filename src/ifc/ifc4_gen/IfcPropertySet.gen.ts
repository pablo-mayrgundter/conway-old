
import { IfcPropertySetDefinition } from "./index"
import { IfcProperty } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertyset.htm */
export  class IfcPropertySet extends IfcPropertySetDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROPERTYSET
  }
  private HasProperties_? : Array<IfcProperty>

  public get HasProperties() : Array<IfcProperty> {
    if ( this.HasProperties_ === void 0 ) {
      this.HasProperties_ = this.extractLambda( 4, (buffer, cursor, endCursor) => {

      let value : Array<IfcProperty> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcProperty ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.HasProperties_ as Array<IfcProperty>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPROPERTYSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROPERTYSET
}
