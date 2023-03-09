import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcRelAssignsToActor from "./IfcRelAssignsToActor.bldrs"
import IfcObject from "./IfcObject.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcactor.htm */
export default  class IfcActor extends IfcObject 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCACTOR;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TheActor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;

    public get TheActor() : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    {
        if ( this.TheActor_ === void 0 )
        {
            this.TheActor_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { try { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( value === void 0 || !( value instanceof IfcOrganization ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    };
        
                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( value === void 0 || !( value instanceof IfcPerson ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    };
        
                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( value === void 0 || !( value instanceof IfcPersonAndOrganization ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    };
        
                    return value; } catch( e ) { return; } } )();

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.TheActor_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization;
    }

    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
