import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcObjectPlacement from "./IfcObjectPlacement.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"
import IfcRelAssignsToProduct from "./IfcRelAssignsToProduct.bldrs"
import IfcObject from "./IfcObject.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcproduct.htm */
export default abstract class IfcProduct extends IfcObject 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPRODUCT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ObjectPlacement_? : IfcObjectPlacement | null;
    private Representation_? : IfcProductRepresentation | null;


    public get ObjectPlacement() : IfcObjectPlacement | null
    {
        if ( this.ObjectPlacement_ === void 0 )
        {
            
        }

        return this.ObjectPlacement_ as IfcObjectPlacement | null;
    }


    public get Representation() : IfcProductRepresentation | null
    {
        if ( this.Representation_ === void 0 )
        {
            
        }

        return this.Representation_ as IfcProductRepresentation | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
