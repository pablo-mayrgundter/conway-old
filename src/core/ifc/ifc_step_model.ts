import EntityTypesIfc from "../../gen/ifc/entity_types_ifc.bldrs";
import StepModelBase from "../step_model_base";
import SchemaIfc from '../../gen/ifc/schema_ifc.bldrs';
import { StepIndexEntry } from "../../../dependencies/conway-ds/src/parsing/step/step_parser";

export default class IfcStepModel extends StepModelBase< EntityTypesIfc >
{
    constructor( buffer: Uint8Array, elementIndex: StepIndexEntry< EntityTypesIfc >[] )
    {
        super( SchemaIfc, buffer, elementIndex );
    }
}