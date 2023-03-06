import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectswitheccentricity.htm */
export default  class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSWITHECCENTRICITY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ConnectionConstraint_? : IfcConnectionGeometry;


    public get ConnectionConstraint() : IfcConnectionGeometry
    {
        if ( this.ConnectionConstraint_ === void 0 )
        {
            
        }

        return this.ConnectionConstraint_ as IfcConnectionGeometry;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
