import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectselements.htm */
export default  class IfcRelConnectsElements extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSELEMENTS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ConnectionGeometry_? : IfcConnectionGeometry | null;
    private RelatingElement_? : IfcElement;
    private RelatedElement_? : IfcElement;


    public get ConnectionGeometry() : IfcConnectionGeometry | null
    {
        if ( this.ConnectionGeometry_ === void 0 )
        {
            
        }

        return this.ConnectionGeometry_ as IfcConnectionGeometry | null;
    }


    public get RelatingElement() : IfcElement
    {
        if ( this.RelatingElement_ === void 0 )
        {
            
        }

        return this.RelatingElement_ as IfcElement;
    }


    public get RelatedElement() : IfcElement
    {
        if ( this.RelatedElement_ === void 0 )
        {
            
        }

        return this.RelatedElement_ as IfcElement;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
