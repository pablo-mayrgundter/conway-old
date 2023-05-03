
import { IfcPropertyAbstraction } from "./index"
import { IfcIdentifier } from "./index"
import { IfcText } from "./index"
import { IfcProperty } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcextendedproperties.htm */
export abstract class IfcExtendedProperties extends IfcPropertyAbstraction {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCEXTENDEDPROPERTIES
  }
  private Name_? : string | null
  private Description_? : string | null
  private Properties_? : Array<IfcProperty>

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

  public get Properties() : Array<IfcProperty> {
    if ( this.Properties_ === void 0 ) {
      this.Properties_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

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

    return this.Properties_ as Array<IfcProperty>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALPROPERTIES, EntityTypesIfc.IFCPROFILEPROPERTIES ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCEXTENDEDPROPERTIES
}
