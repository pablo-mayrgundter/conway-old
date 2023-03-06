import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesdocument.htm */
export default  class IfcRelAssociatesDocument extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESDOCUMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingDocument_? : IfcDocumentReference|IfcDocumentInformation;


    public get RelatingDocument() : IfcDocumentReference|IfcDocumentInformation
    {
        if ( this.RelatingDocument_ === void 0 )
        {
            
        }

        return this.RelatingDocument_ as IfcDocumentReference|IfcDocumentInformation;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
