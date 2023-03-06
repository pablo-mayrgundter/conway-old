import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"
import IfcMappedItem from "./IfcMappedItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrepresentationmap.htm */
export default  class IfcRepresentationMap extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREPRESENTATIONMAP;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MappingOrigin_? : IfcAxis2Placement2D|IfcAxis2Placement3D;
    private MappedRepresentation_? : IfcRepresentation;


    public get MappingOrigin() : IfcAxis2Placement2D|IfcAxis2Placement3D
    {
        if ( this.MappingOrigin_ === void 0 )
        {
            
        }

        return this.MappingOrigin_ as IfcAxis2Placement2D|IfcAxis2Placement3D;
    }


    public get MappedRepresentation() : IfcRepresentation
    {
        if ( this.MappedRepresentation_ === void 0 )
        {
            
        }

        return this.MappedRepresentation_ as IfcRepresentation;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
