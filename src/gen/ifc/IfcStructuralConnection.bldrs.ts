import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"
import IfcStructuralItem from "./IfcStructuralItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralconnection.htm */
export default abstract class IfcStructuralConnection extends IfcStructuralItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALCONNECTION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private AppliedCondition_? : IfcBoundaryCondition | null;


    public get AppliedCondition() : IfcBoundaryCondition | null
    {
        if ( this.AppliedCondition_ === void 0 )
        {
            
        }

        return this.AppliedCondition_ as IfcBoundaryCondition | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
