import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcClosedShell from "./IfcClosedShell.bldrs"
import IfcManifoldSolidBrep from "./IfcManifoldSolidBrep.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfacetedbrepwithvoids.htm */
export default  class IfcFacetedBrepWithVoids extends IfcManifoldSolidBrep 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFACETEDBREPWITHVOIDS;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Voids_? : Array<IfcClosedShell>;


    public get Voids() : Array<IfcClosedShell>
    {
        if ( this.Voids_ === void 0 )
        {
            
        }

        return this.Voids_ as Array<IfcClosedShell>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
