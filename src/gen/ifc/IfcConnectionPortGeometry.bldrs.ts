import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconnectionportgeometry.htm */
export default  class IfcConnectionPortGeometry extends IfcConnectionGeometry 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONNECTIONPORTGEOMETRY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LocationAtRelatingElement_? : IfcAxis2Placement2D|IfcAxis2Placement3D;
    private LocationAtRelatedElement_? : IfcAxis2Placement2D|IfcAxis2Placement3D | null;
    private ProfileOfPort_? : IfcProfileDef;


    public get LocationAtRelatingElement() : IfcAxis2Placement2D|IfcAxis2Placement3D
    {
        if ( this.LocationAtRelatingElement_ === void 0 )
        {
            
        }

        return this.LocationAtRelatingElement_ as IfcAxis2Placement2D|IfcAxis2Placement3D;
    }


    public get LocationAtRelatedElement() : IfcAxis2Placement2D|IfcAxis2Placement3D | null
    {
        if ( this.LocationAtRelatedElement_ === void 0 )
        {
            
        }

        return this.LocationAtRelatedElement_ as IfcAxis2Placement2D|IfcAxis2Placement3D | null;
    }


    public get ProfileOfPort() : IfcProfileDef
    {
        if ( this.ProfileOfPort_ === void 0 )
        {
            
        }

        return this.ProfileOfPort_ as IfcProfileDef;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
