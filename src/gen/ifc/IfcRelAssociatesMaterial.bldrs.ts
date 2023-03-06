import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcMaterialList from "./IfcMaterialList.bldrs"
import IfcMaterialLayerSetUsage from "./IfcMaterialLayerSetUsage.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesmaterial.htm */
export default  class IfcRelAssociatesMaterial extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESMATERIAL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingMaterial_? : IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer;


    public get RelatingMaterial() : IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer
    {
        if ( this.RelatingMaterial_ === void 0 )
        {
            
        }

        return this.RelatingMaterial_ as IfcMaterial|IfcMaterialList|IfcMaterialLayerSetUsage|IfcMaterialLayerSet|IfcMaterialLayer;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
