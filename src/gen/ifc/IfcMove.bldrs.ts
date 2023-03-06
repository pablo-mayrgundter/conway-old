import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcTask from "./IfcTask.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmove.htm */
export default  class IfcMove extends IfcTask 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMOVE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MoveFrom_? : IfcSpatialStructureElement;
    private MoveTo_? : IfcSpatialStructureElement;
    private PunchList_? : Array<IfcText> | null;


    public get MoveFrom() : IfcSpatialStructureElement
    {
        if ( this.MoveFrom_ === void 0 )
        {
            
        }

        return this.MoveFrom_ as IfcSpatialStructureElement;
    }


    public get MoveTo() : IfcSpatialStructureElement
    {
        if ( this.MoveTo_ === void 0 )
        {
            
        }

        return this.MoveTo_ as IfcSpatialStructureElement;
    }


    public get PunchList() : Array<IfcText> | null
    {
        if ( this.PunchList_ === void 0 )
        {
            
        }

        return this.PunchList_ as Array<IfcText> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
