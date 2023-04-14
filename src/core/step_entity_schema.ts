import StepParser from "../../dependencies/conway-ds/src/parsing/step/step_parser";
import StepEntityBase from "./step_entity_base";
import StepEntityConstructor from "./step_entity_constructor";


export default class StepEntitySchema< EntityTypeIDs extends number, BaseEntity extends StepEntityBase< EntityTypeIDs > = StepEntityBase< EntityTypeIDs > >
{
    constructor( public readonly constructors: ReadonlyArray< StepEntityConstructor< EntityTypeIDs, BaseEntity > | undefined >, public readonly parser: StepParser< EntityTypeIDs >, public readonly queries: ReadonlyArray< ReadonlyArray< EntityTypeIDs > > )
    {

    }

}