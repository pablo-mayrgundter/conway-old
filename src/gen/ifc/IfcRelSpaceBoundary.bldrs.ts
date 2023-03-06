import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcSpace from "./IfcSpace.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"
import IfcPhysicalOrVirtualEnum, { IfcPhysicalOrVirtualEnumDeserializeStep } from "./IfcPhysicalOrVirtualEnum.bldrs"
import IfcInternalOrExternalEnum, { IfcInternalOrExternalEnumDeserializeStep } from "./IfcInternalOrExternalEnum.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelspaceboundary.htm */
export default  class IfcRelSpaceBoundary extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELSPACEBOUNDARY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingSpace_? : IfcSpace;
    private RelatedBuildingElement_? : IfcElement | null;
    private ConnectionGeometry_? : IfcConnectionGeometry | null;
    private PhysicalOrVirtualBoundary_? : IfcPhysicalOrVirtualEnum;
    private InternalOrExternalBoundary_? : IfcInternalOrExternalEnum;


    public get RelatingSpace() : IfcSpace
    {
        if ( this.RelatingSpace_ === void 0 )
        {
            
        }

        return this.RelatingSpace_ as IfcSpace;
    }


    public get RelatedBuildingElement() : IfcElement | null
    {
        if ( this.RelatedBuildingElement_ === void 0 )
        {
            
        }

        return this.RelatedBuildingElement_ as IfcElement | null;
    }


    public get ConnectionGeometry() : IfcConnectionGeometry | null
    {
        if ( this.ConnectionGeometry_ === void 0 )
        {
            
        }

        return this.ConnectionGeometry_ as IfcConnectionGeometry | null;
    }


    public get PhysicalOrVirtualBoundary() : IfcPhysicalOrVirtualEnum
    {
        if ( this.PhysicalOrVirtualBoundary_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PhysicalOrVirtualBoundary due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcPhysicalOrVirtualEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PhysicalOrVirtualBoundary' );
            };

            this.PhysicalOrVirtualBoundary_ = value;
        }

        return this.PhysicalOrVirtualBoundary_ as IfcPhysicalOrVirtualEnum;
    }


    public get InternalOrExternalBoundary() : IfcInternalOrExternalEnum
    {
        if ( this.InternalOrExternalBoundary_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InternalOrExternalBoundary due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcInternalOrExternalEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field InternalOrExternalBoundary' );
            };

            this.InternalOrExternalBoundary_ = value;
        }

        return this.InternalOrExternalBoundary_ as IfcInternalOrExternalEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
