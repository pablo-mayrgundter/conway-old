
import { IfcRelConnectsElements } from "./index"
import { IfcElement } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectswithrealizingelements.htm */
export  class IfcRelConnectsWithRealizingElements extends IfcRelConnectsElements {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS
  }
  private RealizingElements_? : Array<IfcElement>
  private ConnectionType_? : string | null

  public get RealizingElements() : Array<IfcElement> {
    if ( this.RealizingElements_ === void 0 ) {
      this.RealizingElements_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      let value : Array<IfcElement> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcElement ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RealizingElements_ as Array<IfcElement>
  }

  public get ConnectionType() : string | null {
    if ( this.ConnectionType_ === void 0 ) {
      this.ConnectionType_ = this.extractString( 8, true )
    }

    return this.ConnectionType_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRELCONNECTSWITHREALIZINGELEMENTS
}
