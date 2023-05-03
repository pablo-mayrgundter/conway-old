
import { IfcProperty } from "./index"
import { IfcIdentifier } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccomplexproperty.htm */
export  class IfcComplexProperty extends IfcProperty {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPLEXPROPERTY
  }
  private UsageName_? : string
  private HasProperties_? : Array<IfcProperty>

  public get UsageName() : string {
    if ( this.UsageName_ === void 0 ) {
      this.UsageName_ = this.extractString( 2, false )
    }

    return this.UsageName_ as string
  }

  public get HasProperties() : Array<IfcProperty> {
    if ( this.HasProperties_ === void 0 ) {
      this.HasProperties_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

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
    [ EntityTypesIfc.IFCCOMPLEXPROPERTY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPLEXPROPERTY
}
