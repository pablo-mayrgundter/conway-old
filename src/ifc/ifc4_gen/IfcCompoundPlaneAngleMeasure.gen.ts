
/* This is generated code, don't alter */
import {
  stepExtractNumber,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompoundplaneanglemeasure.htm */
export class IfcCompoundPlaneAngleMeasure extends StepEntityBase< EntityTypesIfc > {    
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE
  }

  private Value_? : Array<number>;

  public get Value() : Array<number> {
    if ( this.Value_ === void 0 ) {
      this.Value_ = this.extractLambda( 0, (buffer, cursor, endCursor) => {

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

    return this.Value_ as Array<number>
  }

  constructor(
      localID: number,
      internalReference: StepEntityInternalReference< EntityTypesIfc >,
      model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
     super( localID, internalReference, model )
  }

  public static readonly query =
    [ EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE
}
