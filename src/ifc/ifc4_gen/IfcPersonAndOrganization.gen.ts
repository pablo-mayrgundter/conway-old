
import { IfcPerson } from "./index"
import { IfcOrganization } from "./index"
import { IfcActorRole } from "./index"
import {
  stepExtractOptional,
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpersonandorganization.htm */
export  class IfcPersonAndOrganization extends StepEntityBase< EntityTypesIfc > {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCPERSONANDORGANIZATION
  }
  private ThePerson_? : IfcPerson
  private TheOrganization_? : IfcOrganization
  private Roles_? : Array<IfcActorRole> | null

  public get ThePerson() : IfcPerson {
    if ( this.ThePerson_ === void 0 ) {
      this.ThePerson_ = this.extractElement( 0, false, IfcPerson )
    }

    return this.ThePerson_ as IfcPerson
  }

  public get TheOrganization() : IfcOrganization {
    if ( this.TheOrganization_ === void 0 ) {
      this.TheOrganization_ = this.extractElement( 1, false, IfcOrganization )
    }

    return this.TheOrganization_ as IfcOrganization
  }

  public get Roles() : Array<IfcActorRole> | null {
    if ( this.Roles_ === void 0 ) {
      this.Roles_ = this.extractLambda( 2, (buffer, cursor, endCursor) => {

      if ( stepExtractOptional( buffer, cursor, endCursor ) === null ) {
        return null
      }

      let value : Array<IfcActorRole> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcActorRole ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, true )
    }

    return this.Roles_ as Array<IfcActorRole> | null
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCPERSONANDORGANIZATION ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCPERSONANDORGANIZATION
}
