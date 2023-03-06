import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcStructuralLoad from "./IfcStructuralLoad.bldrs"
import IfcStructuralPlanarAction from "./IfcStructuralPlanarAction.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralplanaractionvarying.htm */
export default  class IfcStructuralPlanarActionVarying extends IfcStructuralPlanarAction 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALPLANARACTIONVARYING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private VaryingAppliedLoadLocation_? : IfcShapeAspect;
    private SubsequentAppliedLoads_? : Array<IfcStructuralLoad>;


    public get VaryingAppliedLoadLocation() : IfcShapeAspect
    {
        if ( this.VaryingAppliedLoadLocation_ === void 0 )
        {
            
        }

        return this.VaryingAppliedLoadLocation_ as IfcShapeAspect;
    }


    public get SubsequentAppliedLoads() : Array<IfcStructuralLoad>
    {
        if ( this.SubsequentAppliedLoads_ === void 0 )
        {
            
        }

        return this.SubsequentAppliedLoads_ as Array<IfcStructuralLoad>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
