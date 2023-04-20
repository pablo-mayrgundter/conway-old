import StepEntityBase from './step_entity_base'
import StepEntityInternalReference from './step_entity_internal_reference'
import StepModelBase from './step_model_base'


export default interface StepEntityConstructor< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > >
{
    new( localID: number, internalReference: StepEntityInternalReference< EntityTypeIDs >, model: StepModelBase< EntityTypeIDs, BaseEntity > ) : BaseEntity;

    readonly query: EntityTypeIDs[];

    readonly expectedType: EntityTypeIDs;
}

type StepEntityConstructorAbstractType< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > > = abstract new( localID: number, internalReference: StepEntityInternalReference< EntityTypeIDs >, model: StepModelBase< EntityTypeIDs, BaseEntity > ) => BaseEntity;

/**
 * Represents abstract and non-abstract Entity types constructors, allowing them to be used for type-safe computation and querying.
 */
export interface StepEntityConstructorAbstract< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > > extends StepEntityConstructorAbstractType< EntityTypeIDs, BaseEntity >
{
    readonly query: EntityTypeIDs[];

    readonly expectedType: EntityTypeIDs;
}
