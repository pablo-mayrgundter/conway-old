import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcStructuralMember from "./IfcStructuralMember.bldrs"
import IfcStructuralConnection from "./IfcStructuralConnection.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcStructuralConnectionCondition from "./IfcStructuralConnectionCondition.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcRelConnects from "./IfcRelConnects.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsstructuralmember.htm */
export default  class IfcRelConnectsStructuralMember extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSSTRUCTURALMEMBER;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private RelatingStructuralMember_? : IfcStructuralMember;
    private RelatedStructuralConnection_? : IfcStructuralConnection;
    private AppliedCondition_? : IfcBoundaryCondition | null;
    private AdditionalConditions_? : IfcStructuralConnectionCondition | null;
    private SupportedLength_? : IfcLengthMeasure | null;
    private ConditionCoordinateSystem_? : IfcAxis2Placement3D | null;


    public get RelatingStructuralMember() : IfcStructuralMember
    {
        if ( this.RelatingStructuralMember_ === void 0 )
        {
            
        }

        return this.RelatingStructuralMember_ as IfcStructuralMember;
    }


    public get RelatedStructuralConnection() : IfcStructuralConnection
    {
        if ( this.RelatedStructuralConnection_ === void 0 )
        {
            
        }

        return this.RelatedStructuralConnection_ as IfcStructuralConnection;
    }


    public get AppliedCondition() : IfcBoundaryCondition | null
    {
        if ( this.AppliedCondition_ === void 0 )
        {
            
        }

        return this.AppliedCondition_ as IfcBoundaryCondition | null;
    }


    public get AdditionalConditions() : IfcStructuralConnectionCondition | null
    {
        if ( this.AdditionalConditions_ === void 0 )
        {
            
        }

        return this.AdditionalConditions_ as IfcStructuralConnectionCondition | null;
    }


    public get SupportedLength() : IfcLengthMeasure | null
    {
        if ( this.SupportedLength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SupportedLength due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field SupportedLength' );
                }

                this.SupportedLength_ = null;                
            }
            else
            {
                this.SupportedLength_ = value;
            }
        }

        return this.SupportedLength_ as IfcLengthMeasure | null;
    }


    public get ConditionCoordinateSystem() : IfcAxis2Placement3D | null
    {
        if ( this.ConditionCoordinateSystem_ === void 0 )
        {
            
        }

        return this.ConditionCoordinateSystem_ as IfcAxis2Placement3D | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
