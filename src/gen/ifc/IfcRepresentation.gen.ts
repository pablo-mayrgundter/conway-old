
import { IfcRepresentationContext } from "./index"
import { IfcLabel } from "./index"
import { IfcRepresentationItem } from "./index"
import {
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrepresentation.htm */
export abstract class IfcRepresentation extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREPRESENTATION
  }
  private ContextOfItems_? : IfcRepresentationContext
  private RepresentationIdentifier_? : string | null
  private RepresentationType_? : string | null
  private Items_? : Array<IfcRepresentationItem>

  public get ContextOfItems() : IfcRepresentationContext {
    if ( this.ContextOfItems_ === void 0 ) {
      this.ContextOfItems_ = this.extractElement( 0, false, IfcRepresentationContext )
    }

    return this.ContextOfItems_ as IfcRepresentationContext
  }

  public get RepresentationIdentifier() : string | null {
    if ( this.RepresentationIdentifier_ === void 0 ) {
      this.RepresentationIdentifier_ = this.extractString( 1, true )
    }

    return this.RepresentationIdentifier_ as string | null
  }

  public get RepresentationType() : string | null {
    if ( this.RepresentationType_ === void 0 ) {
      this.RepresentationType_ = this.extractString( 2, true )
    }

    return this.RepresentationType_ as string | null
  }

  public get Items() : Array<IfcRepresentationItem> {
    if ( this.Items_ === void 0 ) {
      this.Items_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcRepresentationItem> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcRepresentationItem ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.Items_ as Array<IfcRepresentationItem>
  }



  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCSHAPEREPRESENTATION, EntityTypesIfc.IFCTOPOLOGYREPRESENTATION, EntityTypesIfc.IFCSTYLEDREPRESENTATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREPRESENTATION
}
