
import { IfcQuantitySet } from "./index"
import { IfcLabel } from "./index"
import { IfcPhysicalQuantity } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelementquantity.htm */
export  class IfcElementQuantity extends IfcQuantitySet {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCELEMENTQUANTITY
  }
  private MethodOfMeasurement_? : string | null
  private Quantities_? : Array<IfcPhysicalQuantity>

  public get MethodOfMeasurement() : string | null {
    if ( this.MethodOfMeasurement_ === void 0 ) {
      this.MethodOfMeasurement_ = this.extractString( 4, true )
    }

    return this.MethodOfMeasurement_ as string | null
  }

  public get Quantities() : Array<IfcPhysicalQuantity> {
    if ( this.Quantities_ === void 0 ) {
      this.Quantities_ = this.extractLambda( 5, (buffer, cursor, endCursor) => {

      let value : Array<IfcPhysicalQuantity> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcPhysicalQuantity ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Quantities_ as Array<IfcPhysicalQuantity>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCELEMENTQUANTITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCELEMENTQUANTITY
}
