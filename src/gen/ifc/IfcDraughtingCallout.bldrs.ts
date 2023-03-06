import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"
import IfcAnnotationTextOccurrence from "./IfcAnnotationTextOccurrence.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"
import IfcDraughtingCalloutRelationship from "./IfcDraughtingCalloutRelationship.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdraughtingcallout.htm */
export default  class IfcDraughtingCallout extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDRAUGHTINGCALLOUT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Contents_? : Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>;


    public get Contents() : Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>
    {
        if ( this.Contents_ === void 0 )
        {
            
        }

        return this.Contents_ as Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
