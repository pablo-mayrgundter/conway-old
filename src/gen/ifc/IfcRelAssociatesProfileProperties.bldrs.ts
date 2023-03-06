import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcProfileProperties from "./IfcProfileProperties.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesprofileproperties.htm */
export default  class IfcRelAssociatesProfileProperties extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESPROFILEPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingProfileProperties_? : IfcProfileProperties;
    private ProfileSectionLocation_? : IfcShapeAspect | null;
    private ProfileOrientation_? : IfcPlaneAngleMeasure|IfcDirection | null;


    public get RelatingProfileProperties() : IfcProfileProperties
    {
        if ( this.RelatingProfileProperties_ === void 0 )
        {
            
        }

        return this.RelatingProfileProperties_ as IfcProfileProperties;
    }


    public get ProfileSectionLocation() : IfcShapeAspect | null
    {
        if ( this.ProfileSectionLocation_ === void 0 )
        {
            
        }

        return this.ProfileSectionLocation_ as IfcShapeAspect | null;
    }


    public get ProfileOrientation() : IfcPlaneAngleMeasure|IfcDirection | null
    {
        if ( this.ProfileOrientation_ === void 0 )
        {
            
        }

        return this.ProfileOrientation_ as IfcPlaneAngleMeasure|IfcDirection | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
