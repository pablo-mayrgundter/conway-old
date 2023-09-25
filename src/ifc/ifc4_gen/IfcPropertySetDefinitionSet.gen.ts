
/* This is generated code, don't alter */
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'
import { IfcPropertySetDefinition } from './index'
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertysetdefinitionset.htm */
export class IfcPropertySetDefinitionSet extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET
  }

  private Value_? : Array<IfcPropertySetDefinition>;

  public get Value() : Array<IfcPropertySetDefinition> {
    if ( this.Value_ === void 0 ) {
      this.Value_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

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

    return this.Value_ as Array<IfcPropertySetDefinition>
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPROPERTYSETDEFINITIONSET
}
