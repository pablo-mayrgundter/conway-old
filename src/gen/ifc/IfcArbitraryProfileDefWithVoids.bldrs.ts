import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCurve from "./IfcCurve.bldrs"
import IfcArbitraryClosedProfileDef from "./IfcArbitraryClosedProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcarbitraryprofiledefwithvoids.htm */
export default  class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCARBITRARYPROFILEDEFWITHVOIDS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private InnerCurves_? : Array<IfcCurve>;


    public get InnerCurves() : Array<IfcCurve>
    {
        if ( this.InnerCurves_ === void 0 )
        {
            
        }

        return this.InnerCurves_ as Array<IfcCurve>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
