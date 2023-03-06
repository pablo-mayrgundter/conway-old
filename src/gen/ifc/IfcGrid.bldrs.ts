import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcGridAxis from "./IfcGridAxis.bldrs"
import IfcRelContainedInSpatialStructure from "./IfcRelContainedInSpatialStructure.bldrs"
import IfcProduct from "./IfcProduct.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcgrid.htm */
export default  class IfcGrid extends IfcProduct 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCGRID;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private UAxes_? : Array<IfcGridAxis>;
    private VAxes_? : Array<IfcGridAxis>;
    private WAxes_? : Array<IfcGridAxis> | null;


    public get UAxes() : Array<IfcGridAxis>
    {
        if ( this.UAxes_ === void 0 )
        {
            
        }

        return this.UAxes_ as Array<IfcGridAxis>;
    }


    public get VAxes() : Array<IfcGridAxis>
    {
        if ( this.VAxes_ === void 0 )
        {
            
        }

        return this.VAxes_ as Array<IfcGridAxis>;
    }


    public get WAxes() : Array<IfcGridAxis> | null
    {
        if ( this.WAxes_ === void 0 )
        {
            
        }

        return this.WAxes_ as Array<IfcGridAxis> | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
