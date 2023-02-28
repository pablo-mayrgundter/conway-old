import StepEntityBase from "./step_entity_base";
import StepEntityInternalReference from "./step_entity_internal_reference";
import StepModelBase from "./step_model_base";

export default interface StepEntityConstructor< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > >
{
    new( localID: number, internalReference: StepEntityInternalReference< EntityTypeIDs >, model: StepModelBase< EntityTypeIDs, BaseEntity > ) : BaseEntity; 
} 
