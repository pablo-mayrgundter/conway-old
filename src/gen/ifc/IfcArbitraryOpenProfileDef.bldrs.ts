import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcarbitraryopenprofiledef.htm */
export default  class IfcArbitraryOpenProfileDef extends IfcProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCARBITRARYOPENPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Curve_? : IfcBoundedCurve;


    public get Curve() : IfcBoundedCurve
    {
        if ( this.Curve_ === void 0 )
        {
            
        }

        return this.Curve_ as IfcBoundedCurve;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
