
import { IfcLabel } from "./index"
import { IfcText } from "./index"
import { IfcRepresentation } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcproductrepresentation.htm */
export abstract class IfcProductRepresentation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPRODUCTREPRESENTATION
  }
  private Name_? : string | null
  private Description_? : string | null
  private Representations_? : Array<IfcRepresentation>

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

  public get Representations() : Array<IfcRepresentation> {
    if ( this.Representations_ === void 0 ) {
      this.Representations_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      let value : Array<IfcRepresentation> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcRepresentation ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Representations_ as Array<IfcRepresentation>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCMATERIALDEFINITIONREPRESENTATION, EntityTypesIfc.IFCPRODUCTDEFINITIONSHAPE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPRODUCTREPRESENTATION
}
