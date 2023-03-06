import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconditioncriterion.htm */
export default  class IfcConditionCriterion extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONDITIONCRITERION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Criterion_? : IfcLabel|IfcMeasureWithUnit;
    private CriterionDateTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;


    public get Criterion() : IfcLabel|IfcMeasureWithUnit
    {
        if ( this.Criterion_ === void 0 )
        {
            
        }

        return this.Criterion_ as IfcLabel|IfcMeasureWithUnit;
    }


    public get CriterionDateTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.CriterionDateTime_ === void 0 )
        {
            
        }

        return this.CriterionDateTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
