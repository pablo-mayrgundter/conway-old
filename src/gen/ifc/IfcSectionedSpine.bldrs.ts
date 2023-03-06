import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCompositeCurve from "./IfcCompositeCurve.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsectionedspine.htm */
export default  class IfcSectionedSpine extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSECTIONEDSPINE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SpineCurve_? : IfcCompositeCurve;
    private CrossSections_? : Array<IfcProfileDef>;
    private CrossSectionPositions_? : Array<IfcAxis2Placement3D>;


    public get SpineCurve() : IfcCompositeCurve
    {
        if ( this.SpineCurve_ === void 0 )
        {
            
        }

        return this.SpineCurve_ as IfcCompositeCurve;
    }


    public get CrossSections() : Array<IfcProfileDef>
    {
        if ( this.CrossSections_ === void 0 )
        {
            
        }

        return this.CrossSections_ as Array<IfcProfileDef>;
    }


    public get CrossSectionPositions() : Array<IfcAxis2Placement3D>
    {
        if ( this.CrossSectionPositions_ === void 0 )
        {
            
        }

        return this.CrossSectionPositions_ as Array<IfcAxis2Placement3D>;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
