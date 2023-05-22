
import { IfcObjectDefinition } from "./index"
import { IfcLabel } from "./index"
import { IfcRepresentationContext } from "./index"
import { IfcUnitAssignment } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../core/step_entity_internal_reference'
import StepEntityBase from '../../core/step_entity_base'
import StepModelBase from '../../core/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccontext.htm */
export abstract class IfcContext extends IfcObjectDefinition {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCCONTEXT
  }
  private ObjectType_? : string | null
  private LongName_? : string | null
  private Phase_? : string | null
  private RepresentationContexts_? : Array<IfcRepresentationContext> | null
  private UnitsInContext_? : IfcUnitAssignment | null

  public get ObjectType() : string | null {
    if ( this.ObjectType_ === void 0 ) {
      this.ObjectType_ = this.extractString( 4, true )
    }

    return this.ObjectType_ as string | null
  }

  public get LongName() : string | null {
    if ( this.LongName_ === void 0 ) {
      this.LongName_ = this.extractString( 5, true )
    }

    return this.LongName_ as string | null
  }

  public get Phase() : string | null {
    if ( this.Phase_ === void 0 ) {
      this.Phase_ = this.extractString( 6, true )
    }

    return this.Phase_ as string | null
  }

  public get RepresentationContexts() : Array<IfcRepresentationContext> | null {
    if ( this.RepresentationContexts_ === void 0 ) {
      this.RepresentationContexts_ = this.extractLambda( 7, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcRepresentationContext> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcRepresentationContext ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.RepresentationContexts_ as Array<IfcRepresentationContext> | null
  }

  public get UnitsInContext() : IfcUnitAssignment | null {
    if ( this.UnitsInContext_ === void 0 ) {
      this.UnitsInContext_ = this.extractElement( 8, true, IfcUnitAssignment )
    }

    return this.UnitsInContext_ as IfcUnitAssignment | null
  }


  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPROJECT, EntityTypesIfc.IFCPROJECTLIBRARY ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCCONTEXT
}
