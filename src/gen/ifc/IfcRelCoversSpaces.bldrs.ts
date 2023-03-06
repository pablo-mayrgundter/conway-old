import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSpace from "./IfcSpace.bldrs"
import IfcCovering from "./IfcCovering.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelcoversspaces.htm */
export default  class IfcRelCoversSpaces extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCOVERSSPACES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatedSpace_? : IfcSpace;
    private RelatedCoverings_? : Array<IfcCovering>;


    public get RelatedSpace() : IfcSpace
    {
        if ( this.RelatedSpace_ === void 0 )
        {
            
        }

        return this.RelatedSpace_ as IfcSpace;
    }


    public get RelatedCoverings() : Array<IfcCovering>
    {
        if ( this.RelatedCoverings_ === void 0 )
        {
            
        }

        return this.RelatedCoverings_ as Array<IfcCovering>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
