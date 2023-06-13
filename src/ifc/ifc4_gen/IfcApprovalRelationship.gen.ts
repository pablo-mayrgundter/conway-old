
import { IfcResourceLevelRelationship } from "./index"
import { IfcApproval } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcapprovalrelationship.htm */
export  class IfcApprovalRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCAPPROVALRELATIONSHIP
  }
  private RelatingApproval_? : IfcApproval
  private RelatedApprovals_? : Array<IfcApproval>

  public get RelatingApproval() : IfcApproval {
    if ( this.RelatingApproval_ === void 0 ) {
      this.RelatingApproval_ = this.extractElement( 2, false, IfcApproval )
    }

    return this.RelatingApproval_ as IfcApproval
  }

  public get RelatedApprovals() : Array<IfcApproval> {
    if ( this.RelatedApprovals_ === void 0 ) {
      this.RelatedApprovals_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcApproval> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
           let value = this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcApproval ) )  {
            throw new Error( 'Value in STEP was incorrectly typed for field' )
          }
    
          return value
        })() )
      }
      return value }, false )
    }

    return this.RelatedApprovals_ as Array<IfcApproval>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCAPPROVALRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCAPPROVALRELATIONSHIP
}
