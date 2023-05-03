
import { IfcDerivedUnit } from "./index"
import { IfcMonetaryUnit } from "./index"
import { IfcNamedUnit } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcunitassignment.htm */
export  class IfcUnitAssignment extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCUNITASSIGNMENT
  }
  private Units_? : Array<IfcDerivedUnit | IfcMonetaryUnit | IfcNamedUnit>

  public get Units() : Array<IfcDerivedUnit | IfcMonetaryUnit | IfcNamedUnit> {
    if ( this.Units_ === void 0 ) {
      this.Units_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

      let value : Array<IfcDerivedUnit | IfcMonetaryUnit | IfcNamedUnit> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcDerivedUnit ) && !( value instanceof IfcMonetaryUnit ) && !( value instanceof IfcNamedUnit ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcDerivedUnit | IfcMonetaryUnit | IfcNamedUnit)})() )
      }
      return value }, false )
    }

    return this.Units_ as Array<IfcDerivedUnit | IfcMonetaryUnit | IfcNamedUnit>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCUNITASSIGNMENT ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCUNITASSIGNMENT
}
