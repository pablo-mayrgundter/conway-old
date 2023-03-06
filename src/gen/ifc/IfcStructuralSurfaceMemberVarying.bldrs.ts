import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcStructuralSurfaceMember from "./IfcStructuralSurfaceMember.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralsurfacemembervarying.htm */
export default  class IfcStructuralSurfaceMemberVarying extends IfcStructuralSurfaceMember 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALSURFACEMEMBERVARYING;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SubsequentThickness_? : Array<IfcPositiveLengthMeasure>;
    private VaryingThicknessLocation_? : IfcShapeAspect;


    public get SubsequentThickness() : Array<IfcPositiveLengthMeasure>
    {
        if ( this.SubsequentThickness_ === void 0 )
        {
            
        }

        return this.SubsequentThickness_ as Array<IfcPositiveLengthMeasure>;
    }


    public get VaryingThicknessLocation() : IfcShapeAspect
    {
        if ( this.VaryingThicknessLocation_ === void 0 )
        {
            
        }

        return this.VaryingThicknessLocation_ as IfcShapeAspect;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
