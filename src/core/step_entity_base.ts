import { IndexMark } from "../../dependencies/conway-ds/src/parsing/step/step_vtable_builder";
import StepEntityInternalReference from "./step_entity_internal_reference";
import StepEntitySchema from "./step_entity_schema";
import StepModelBase from "./step_model_base";

export default abstract class StepEntityBase< EntityTypeIDs extends number >
{
    public abstract get type(): EntityTypeIDs;

    public abstract get schema(): StepEntitySchema< EntityTypeIDs >;

    constructor( public readonly localID: number, protected readonly internalReference_: StepEntityInternalReference< EntityTypeIDs >, public readonly model: StepModelBase< EntityTypeIDs > ) {} 

    protected guaranteeVTable(): void
    {
        if ( this.internalReference_.vtableIndex === void 0 )
        {
            let populated = this.model.populateVtableEntry( this.localID );

            if ( !populated )
            {
                throw new Error( 'Entity does not have matching table entry to read from model' );
            }
        }
    }
}