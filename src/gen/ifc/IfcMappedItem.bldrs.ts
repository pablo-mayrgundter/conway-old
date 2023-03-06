import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcCartesianTransformationOperator from "./IfcCartesianTransformationOperator.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcmappeditem.htm */
export default  class IfcMappedItem extends IfcRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCMAPPEDITEM;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MappingSource_? : IfcRepresentationMap;
    private MappingTarget_? : IfcCartesianTransformationOperator;


    public get MappingSource() : IfcRepresentationMap
    {
        if ( this.MappingSource_ === void 0 )
        {
            
        }

        return this.MappingSource_ as IfcRepresentationMap;
    }


    public get MappingTarget() : IfcCartesianTransformationOperator
    {
        if ( this.MappingTarget_ === void 0 )
        {
            
        }

        return this.MappingTarget_ as IfcCartesianTransformationOperator;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
