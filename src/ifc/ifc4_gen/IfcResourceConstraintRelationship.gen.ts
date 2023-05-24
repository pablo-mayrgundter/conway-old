
import { IfcResourceLevelRelationship } from "./index"
import { IfcConstraint } from "./index"
import { IfcActorRole } from "./index"
import { IfcAppliedValue } from "./index"
import { IfcApproval } from "./index"
import { IfcContextDependentUnit } from "./index"
import { IfcConversionBasedUnit } from "./index"
import { IfcExternalInformation } from "./index"
import { IfcExternalReference } from "./index"
import { IfcMaterialDefinition } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"
import { IfcPhysicalQuantity } from "./index"
import { IfcProfileDef } from "./index"
import { IfcPropertyAbstraction } from "./index"
import { IfcTimeSeries } from "./index"
import {
  stepExtractArray,
} from '../../step/parsing/step_deserialization_functions'

/* This is generated code, don't modify */
import EntityTypesIfc from './entity_types_ifc.gen'
import StepEntityInternalReference from '../../step/step_entity_internal_reference'
import StepEntityBase from '../../step/step_entity_base'
import StepModelBase from '../../step/step_model_base'

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcresourceconstraintrelationship.htm */
export  class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
  public get type(): EntityTypesIfc {
    return EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP
  }
  private RelatingConstraint_? : IfcConstraint
  private RelatedResourceObjects_? : Array<IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries>

  public get RelatingConstraint() : IfcConstraint {
    if ( this.RelatingConstraint_ === void 0 ) {
      this.RelatingConstraint_ = this.extractElement( 2, false, IfcConstraint )
    }

    return this.RelatingConstraint_ as IfcConstraint
  }

  public get RelatedResourceObjects() : Array<IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries> {
    if ( this.RelatedResourceObjects_ === void 0 ) {
      this.RelatedResourceObjects_ = this.extractLambda( 3, (buffer, cursor, endCursor) => {

      let value : Array<IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries> = [];

      for ( let address of stepExtractArray( buffer, cursor, endCursor ) ) {
        value.push( (() => {
          const cursor = address
          const value : StepEntityBase< EntityTypesIfc > | undefined =
            this.extractBufferReference( buffer, cursor, endCursor )
    
          if ( !( value instanceof IfcActorRole ) && !( value instanceof IfcAppliedValue ) && !( value instanceof IfcApproval ) && !( value instanceof IfcConstraint ) && !( value instanceof IfcContextDependentUnit ) && !( value instanceof IfcConversionBasedUnit ) && !( value instanceof IfcExternalInformation ) && !( value instanceof IfcExternalReference ) && !( value instanceof IfcMaterialDefinition ) && !( value instanceof IfcOrganization ) && !( value instanceof IfcPerson ) && !( value instanceof IfcPersonAndOrganization ) && !( value instanceof IfcPhysicalQuantity ) && !( value instanceof IfcProfileDef ) && !( value instanceof IfcPropertyAbstraction ) && !( value instanceof IfcTimeSeries ) ) {
            throw new Error( 'Value in select must be populated' )
          }
          return value as (IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries)})() )
      }
      return value }, false )
    }

    return this.RelatedResourceObjects_ as Array<IfcActorRole | IfcAppliedValue | IfcApproval | IfcConstraint | IfcContextDependentUnit | IfcConversionBasedUnit | IfcExternalInformation | IfcExternalReference | IfcMaterialDefinition | IfcOrganization | IfcPerson | IfcPersonAndOrganization | IfcPhysicalQuantity | IfcProfileDef | IfcPropertyAbstraction | IfcTimeSeries>
  }
  constructor(
    localID: number,
    internalReference: StepEntityInternalReference< EntityTypesIfc >,
    model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > ) {
    super( localID, internalReference, model )
  }

  public static readonly query = 
    [ EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP ]

  public static readonly expectedType: EntityTypesIfc =
    EntityTypesIfc.IFCRESOURCECONSTRAINTRELATIONSHIP
}
