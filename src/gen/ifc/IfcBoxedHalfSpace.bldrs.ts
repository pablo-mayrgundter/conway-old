import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBoundingBox from "./IfcBoundingBox.bldrs"
import IfcHalfSpaceSolid from "./IfcHalfSpaceSolid.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboxedhalfspace.htm */
export default  class IfcBoxedHalfSpace extends IfcHalfSpaceSolid 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBOXEDHALFSPACE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Enclosure_? : IfcBoundingBox;


    public get Enclosure() : IfcBoundingBox
    {
        if ( this.Enclosure_ === void 0 )
        {
            
        }

        return this.Enclosure_ as IfcBoundingBox;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
