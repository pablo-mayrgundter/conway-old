
import { IfcPhysicalQuantity } from "./index"
import { IfcLabel } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcphysicalcomplexquantity.htm */
export  class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY
  }
  private HasQuantities_? : Array<IfcPhysicalQuantity>
  private Discrimination_? : string
  private Quality_? : string | null
  private Usage_? : string | null

  public get HasQuantities() : Array<IfcPhysicalQuantity> {
    if ( this.HasQuantities_ === void 0 ) {
      this.HasQuantities_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

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

    return this.HasQuantities_ as Array<IfcPhysicalQuantity>
  }

  public get Discrimination() : string {
    if ( this.Discrimination_ === void 0 ) {
      this.Discrimination_ = this.extractString( 3, false )
    }

    return this.Discrimination_ as string
  }

  public get Quality() : string | null {
    if ( this.Quality_ === void 0 ) {
      this.Quality_ = this.extractString( 4, true )
    }

    return this.Quality_ as string | null
  }

  public get Usage() : string | null {
    if ( this.Usage_ === void 0 ) {
      this.Usage_ = this.extractString( 5, true )
    }

    return this.Usage_ as string | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPHYSICALCOMPLEXQUANTITY
}
