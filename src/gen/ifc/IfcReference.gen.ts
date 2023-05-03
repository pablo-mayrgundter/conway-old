
import { IfcIdentifier } from "./index"
import { IfcLabel } from "./index"
import { IfcInteger } from "./index"
import {
  stepExtractOptional,
  stepExtractNumber,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreference.htm */
export  class IfcReference extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCREFERENCE
  }
  private TypeIdentifier_? : string | null
  private AttributeIdentifier_? : string | null
  private InstanceName_? : string | null
  private ListPositions_? : Array< number > | null
  private InnerReference_? : IfcReference | null

  public get TypeIdentifier() : string | null {
    if ( this.TypeIdentifier_ === void 0 ) {
      this.TypeIdentifier_ = this.extractString( 0, true )
    }

    return this.TypeIdentifier_ as string | null
  }

  public get AttributeIdentifier() : string | null {
    if ( this.AttributeIdentifier_ === void 0 ) {
      this.AttributeIdentifier_ = this.extractString( 1, true )
    }

    return this.AttributeIdentifier_ as string | null
  }

  public get InstanceName() : string | null {
    if ( this.InstanceName_ === void 0 ) {
      this.InstanceName_ = this.extractString( 2, true )
    }

    return this.InstanceName_ as string | null
  }

  public get ListPositions() : Array< number > | null {
    if ( this.ListPositions_ === void 0 ) {
      this.ListPositions_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

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
      return value }, true )
    }

    return this.ListPositions_ as Array< number > | null
  }

  public get InnerReference() : IfcReference | null {
    if ( this.InnerReference_ === void 0 ) {
      this.InnerReference_ = this.extractElement( 4, true, IfcReference )
    }

    return this.InnerReference_ as IfcReference | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCREFERENCE ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCREFERENCE
}
