
import { IfcResourceLevelRelationship } from "./index"
import { IfcOrganization } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcorganizationrelationship.htm */
export  class IfcOrganizationRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP
  }
  private RelatingOrganization_? : IfcOrganization
  private RelatedOrganizations_? : Array<IfcOrganization>

  public get RelatingOrganization() : IfcOrganization {
    if ( this.RelatingOrganization_ === void 0 ) {
      this.RelatingOrganization_ = this.extractElement( 2, false, IfcOrganization )
    }

    return this.RelatingOrganization_ as IfcOrganization
  }

  public get RelatedOrganizations() : Array<IfcOrganization> {
    if ( this.RelatedOrganizations_ === void 0 ) {
      this.RelatedOrganizations_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcOrganization> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcOrganization ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedOrganizations_ as Array<IfcOrganization>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCORGANIZATIONRELATIONSHIP
}
