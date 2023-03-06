import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcSectionReinforcementProperties from "./IfcSectionReinforcementProperties.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcreinforcementdefinitionproperties.htm */
export default  class IfcReinforcementDefinitionProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCREINFORCEMENTDEFINITIONPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DefinitionType_? : IfcLabel | null;
    private ReinforcementSectionDefinitions_? : Array<IfcSectionReinforcementProperties>;


    public get DefinitionType() : IfcLabel | null
    {
        if ( this.DefinitionType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DefinitionType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field DefinitionType' );
                }

                this.DefinitionType_ = null;                
            }
            else
            {
                this.DefinitionType_ = value;
            }
        }

        return this.DefinitionType_ as IfcLabel | null;
    }


    public get ReinforcementSectionDefinitions() : Array<IfcSectionReinforcementProperties>
    {
        if ( this.ReinforcementSectionDefinitions_ === void 0 )
        {
            
        }

        return this.ReinforcementSectionDefinitions_ as Array<IfcSectionReinforcementProperties>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
