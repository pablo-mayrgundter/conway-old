import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPreDefinedCurveFont from "./IfcPreDefinedCurveFont.bldrs"
import IfcCurveStyleFont from "./IfcCurveStyleFont.bldrs"
import IfcCurveStyleFontAndScaling from "./IfcCurveStyleFontAndScaling.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"
import IfcPresentationStyle from "./IfcPresentationStyle.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccurvestyle.htm */
export default  class IfcCurveStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCURVESTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private CurveFont_? : IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling | null;
    private CurveWidth_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    private CurveColour_? : IfcColourSpecification|IfcPreDefinedColour | null;


    public get CurveFont() : IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling | null
    {
        if ( this.CurveFont_ === void 0 )
        {
            
        }

        return this.CurveFont_ as IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling | null;
    }


    public get CurveWidth() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null
    {
        if ( this.CurveWidth_ === void 0 )
        {
            
        }

        return this.CurveWidth_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    }


    public get CurveColour() : IfcColourSpecification|IfcPreDefinedColour | null
    {
        if ( this.CurveColour_ === void 0 )
        {
            
        }

        return this.CurveColour_ as IfcColourSpecification|IfcPreDefinedColour | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
