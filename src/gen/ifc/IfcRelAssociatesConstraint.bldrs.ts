import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcConstraint from "./IfcConstraint.bldrs"
import IfcRelAssociates from "./IfcRelAssociates.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelassociatesconstraint.htm */
export default  class IfcRelAssociatesConstraint extends IfcRelAssociates 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELASSOCIATESCONSTRAINT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Intent_? : IfcLabel;
    private RelatingConstraint_? : IfcConstraint;


    public get Intent() : IfcLabel
    {
        if ( this.Intent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Intent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Intent' );
            };

            this.Intent_ = value;
        }

        return this.Intent_ as IfcLabel;
    }


    public get RelatingConstraint() : IfcConstraint
    {
        if ( this.RelatingConstraint_ === void 0 )
        {
            
        }

        return this.RelatingConstraint_ as IfcConstraint;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
