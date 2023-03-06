import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcVector from "./IfcVector.bldrs"
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctwodirectionrepeatfactor.htm */
export default  class IfcTwoDirectionRepeatFactor extends IfcOneDirectionRepeatFactor 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTWODIRECTIONREPEATFACTOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SecondRepeatFactor_? : IfcVector;


    public get SecondRepeatFactor() : IfcVector
    {
        if ( this.SecondRepeatFactor_ === void 0 )
        {
            
        }

        return this.SecondRepeatFactor_ as IfcVector;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
