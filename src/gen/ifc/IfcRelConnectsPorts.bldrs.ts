import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsports.htm */
export default  class IfcRelConnectsPorts extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSPORTS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingPort_? : IfcPort;
    private RelatedPort_? : IfcPort;
    private RealizingElement_? : IfcElement | null;


    public get RelatingPort() : IfcPort
    {
        if ( this.RelatingPort_ === void 0 )
        {
            
        }

        return this.RelatingPort_ as IfcPort;
    }


    public get RelatedPort() : IfcPort
    {
        if ( this.RelatedPort_ === void 0 )
        {
            
        }

        return this.RelatedPort_ as IfcPort;
    }


    public get RealizingElement() : IfcElement | null
    {
        if ( this.RealizingElement_ === void 0 )
        {
            
        }

        return this.RealizingElement_ as IfcElement | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
