import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcNullStyle, { IfcNullStyleDeserializeStep } from "./IfcNullStyle.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcSymbolStyle from "./IfcSymbolStyle.bldrs"
import IfcFillAreaStyle from "./IfcFillAreaStyle.bldrs"
import IfcTextStyle from "./IfcTextStyle.bldrs"
import IfcSurfaceStyle from "./IfcSurfaceStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpresentationstyleassignment.htm */
export default  class IfcPresentationStyleAssignment extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPRESENTATIONSTYLEASSIGNMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Styles_? : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>;


    public get Styles() : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>
    {
        if ( this.Styles_ === void 0 )
        {
            
        }

        return this.Styles_ as Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
