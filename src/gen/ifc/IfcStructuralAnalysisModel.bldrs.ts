import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAnalysisModelTypeEnum, { IfcAnalysisModelTypeEnumDeserializeStep } from "./IfcAnalysisModelTypeEnum.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralResultGroup from "./IfcStructuralResultGroup.bldrs"
import IfcSystem from "./IfcSystem.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralanalysismodel.htm */
export default  class IfcStructuralAnalysisModel extends IfcSystem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALANALYSISMODEL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PredefinedType_? : IfcAnalysisModelTypeEnum;
    private OrientationOf2DPlane_? : IfcAxis2Placement3D | null;
    private LoadedBy_? : Array<IfcStructuralLoadGroup> | null;
    private HasResults_? : Array<IfcStructuralResultGroup> | null;


    public get PredefinedType() : IfcAnalysisModelTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PredefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcAnalysisModelTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PredefinedType' );
            };

            this.PredefinedType_ = value;
        }

        return this.PredefinedType_ as IfcAnalysisModelTypeEnum;
    }


    public get OrientationOf2DPlane() : IfcAxis2Placement3D | null
    {
        if ( this.OrientationOf2DPlane_ === void 0 )
        {
            
        }

        return this.OrientationOf2DPlane_ as IfcAxis2Placement3D | null;
    }


    public get LoadedBy() : Array<IfcStructuralLoadGroup> | null
    {
        if ( this.LoadedBy_ === void 0 )
        {
            
        }

        return this.LoadedBy_ as Array<IfcStructuralLoadGroup> | null;
    }


    public get HasResults() : Array<IfcStructuralResultGroup> | null
    {
        if ( this.HasResults_ === void 0 )
        {
            
        }

        return this.HasResults_ as Array<IfcStructuralResultGroup> | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
