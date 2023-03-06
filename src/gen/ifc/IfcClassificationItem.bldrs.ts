import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcClassificationNotationFacet from "./IfcClassificationNotationFacet.bldrs"
import IfcClassification from "./IfcClassification.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcClassificationItemRelationship from "./IfcClassificationItemRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcclassificationitem.htm */
export default  class IfcClassificationItem extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCLASSIFICATIONITEM;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Notation_? : IfcClassificationNotationFacet;
    private ItemOf_? : IfcClassification | null;
    private Title_? : IfcLabel;


    public get Notation() : IfcClassificationNotationFacet
    {
        if ( this.Notation_ === void 0 )
        {
            
        }

        return this.Notation_ as IfcClassificationNotationFacet;
    }


    public get ItemOf() : IfcClassification | null
    {
        if ( this.ItemOf_ === void 0 )
        {
            
        }

        return this.ItemOf_ as IfcClassification | null;
    }


    public get Title() : IfcLabel
    {
        if ( this.Title_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Title due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Title' );
            };

            this.Title_ = value;
        }

        return this.Title_ as IfcLabel;
    }






    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
