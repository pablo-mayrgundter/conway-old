import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcterminatorsymbol.htm */
export default  class IfcTerminatorSymbol extends IfcAnnotationSymbolOccurrence 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTERMINATORSYMBOL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private AnnotatedCurve_? : IfcAnnotationCurveOccurrence;


    public get AnnotatedCurve() : IfcAnnotationCurveOccurrence
    {
        if ( this.AnnotatedCurve_ === void 0 )
        {
            
        }

        return this.AnnotatedCurve_ as IfcAnnotationCurveOccurrence;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
