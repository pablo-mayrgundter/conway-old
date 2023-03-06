import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcMomentOfInertiaMeasure from "./IfcMomentOfInertiaMeasure.bldrs"
import IfcWarpingConstantMeasure from "./IfcWarpingConstantMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcSectionModulusMeasure from "./IfcSectionModulusMeasure.bldrs"
import IfcGeneralProfileProperties from "./IfcGeneralProfileProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralprofileproperties.htm */
export default  class IfcStructuralProfileProperties extends IfcGeneralProfileProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALPROFILEPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TorsionalConstantX_? : IfcMomentOfInertiaMeasure | null;
    private MomentOfInertiaYZ_? : IfcMomentOfInertiaMeasure | null;
    private MomentOfInertiaY_? : IfcMomentOfInertiaMeasure | null;
    private MomentOfInertiaZ_? : IfcMomentOfInertiaMeasure | null;
    private WarpingConstant_? : IfcWarpingConstantMeasure | null;
    private ShearCentreZ_? : IfcLengthMeasure | null;
    private ShearCentreY_? : IfcLengthMeasure | null;
    private ShearDeformationAreaZ_? : IfcAreaMeasure | null;
    private ShearDeformationAreaY_? : IfcAreaMeasure | null;
    private MaximumSectionModulusY_? : IfcSectionModulusMeasure | null;
    private MinimumSectionModulusY_? : IfcSectionModulusMeasure | null;
    private MaximumSectionModulusZ_? : IfcSectionModulusMeasure | null;
    private MinimumSectionModulusZ_? : IfcSectionModulusMeasure | null;
    private TorsionalSectionModulus_? : IfcSectionModulusMeasure | null;
    private CentreOfGravityInX_? : IfcLengthMeasure | null;
    private CentreOfGravityInY_? : IfcLengthMeasure | null;


    public get TorsionalConstantX() : IfcMomentOfInertiaMeasure | null
    {
        if ( this.TorsionalConstantX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TorsionalConstantX due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TorsionalConstantX' );
                }

                this.TorsionalConstantX_ = null;                
            }
            else
            {
                this.TorsionalConstantX_ = value;
            }
        }

        return this.TorsionalConstantX_ as IfcMomentOfInertiaMeasure | null;
    }


    public get MomentOfInertiaYZ() : IfcMomentOfInertiaMeasure | null
    {
        if ( this.MomentOfInertiaYZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MomentOfInertiaYZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MomentOfInertiaYZ' );
                }

                this.MomentOfInertiaYZ_ = null;                
            }
            else
            {
                this.MomentOfInertiaYZ_ = value;
            }
        }

        return this.MomentOfInertiaYZ_ as IfcMomentOfInertiaMeasure | null;
    }


    public get MomentOfInertiaY() : IfcMomentOfInertiaMeasure | null
    {
        if ( this.MomentOfInertiaY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MomentOfInertiaY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MomentOfInertiaY' );
                }

                this.MomentOfInertiaY_ = null;                
            }
            else
            {
                this.MomentOfInertiaY_ = value;
            }
        }

        return this.MomentOfInertiaY_ as IfcMomentOfInertiaMeasure | null;
    }


    public get MomentOfInertiaZ() : IfcMomentOfInertiaMeasure | null
    {
        if ( this.MomentOfInertiaZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MomentOfInertiaZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MomentOfInertiaZ' );
                }

                this.MomentOfInertiaZ_ = null;                
            }
            else
            {
                this.MomentOfInertiaZ_ = value;
            }
        }

        return this.MomentOfInertiaZ_ as IfcMomentOfInertiaMeasure | null;
    }


    public get WarpingConstant() : IfcWarpingConstantMeasure | null
    {
        if ( this.WarpingConstant_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WarpingConstant due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field WarpingConstant' );
                }

                this.WarpingConstant_ = null;                
            }
            else
            {
                this.WarpingConstant_ = value;
            }
        }

        return this.WarpingConstant_ as IfcWarpingConstantMeasure | null;
    }


    public get ShearCentreZ() : IfcLengthMeasure | null
    {
        if ( this.ShearCentreZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearCentreZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearCentreZ' );
                }

                this.ShearCentreZ_ = null;                
            }
            else
            {
                this.ShearCentreZ_ = value;
            }
        }

        return this.ShearCentreZ_ as IfcLengthMeasure | null;
    }


    public get ShearCentreY() : IfcLengthMeasure | null
    {
        if ( this.ShearCentreY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearCentreY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearCentreY' );
                }

                this.ShearCentreY_ = null;                
            }
            else
            {
                this.ShearCentreY_ = value;
            }
        }

        return this.ShearCentreY_ as IfcLengthMeasure | null;
    }


    public get ShearDeformationAreaZ() : IfcAreaMeasure | null
    {
        if ( this.ShearDeformationAreaZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearDeformationAreaZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearDeformationAreaZ' );
                }

                this.ShearDeformationAreaZ_ = null;                
            }
            else
            {
                this.ShearDeformationAreaZ_ = value;
            }
        }

        return this.ShearDeformationAreaZ_ as IfcAreaMeasure | null;
    }


    public get ShearDeformationAreaY() : IfcAreaMeasure | null
    {
        if ( this.ShearDeformationAreaY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ShearDeformationAreaY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ShearDeformationAreaY' );
                }

                this.ShearDeformationAreaY_ = null;                
            }
            else
            {
                this.ShearDeformationAreaY_ = value;
            }
        }

        return this.ShearDeformationAreaY_ as IfcAreaMeasure | null;
    }


    public get MaximumSectionModulusY() : IfcSectionModulusMeasure | null
    {
        if ( this.MaximumSectionModulusY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MaximumSectionModulusY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MaximumSectionModulusY' );
                }

                this.MaximumSectionModulusY_ = null;                
            }
            else
            {
                this.MaximumSectionModulusY_ = value;
            }
        }

        return this.MaximumSectionModulusY_ as IfcSectionModulusMeasure | null;
    }


    public get MinimumSectionModulusY() : IfcSectionModulusMeasure | null
    {
        if ( this.MinimumSectionModulusY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 17 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinimumSectionModulusY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 17;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MinimumSectionModulusY' );
                }

                this.MinimumSectionModulusY_ = null;                
            }
            else
            {
                this.MinimumSectionModulusY_ = value;
            }
        }

        return this.MinimumSectionModulusY_ as IfcSectionModulusMeasure | null;
    }


    public get MaximumSectionModulusZ() : IfcSectionModulusMeasure | null
    {
        if ( this.MaximumSectionModulusZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 18 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MaximumSectionModulusZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 18;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MaximumSectionModulusZ' );
                }

                this.MaximumSectionModulusZ_ = null;                
            }
            else
            {
                this.MaximumSectionModulusZ_ = value;
            }
        }

        return this.MaximumSectionModulusZ_ as IfcSectionModulusMeasure | null;
    }


    public get MinimumSectionModulusZ() : IfcSectionModulusMeasure | null
    {
        if ( this.MinimumSectionModulusZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 19 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinimumSectionModulusZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 19;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MinimumSectionModulusZ' );
                }

                this.MinimumSectionModulusZ_ = null;                
            }
            else
            {
                this.MinimumSectionModulusZ_ = value;
            }
        }

        return this.MinimumSectionModulusZ_ as IfcSectionModulusMeasure | null;
    }


    public get TorsionalSectionModulus() : IfcSectionModulusMeasure | null
    {
        if ( this.TorsionalSectionModulus_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 20 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TorsionalSectionModulus due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 20;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TorsionalSectionModulus' );
                }

                this.TorsionalSectionModulus_ = null;                
            }
            else
            {
                this.TorsionalSectionModulus_ = value;
            }
        }

        return this.TorsionalSectionModulus_ as IfcSectionModulusMeasure | null;
    }


    public get CentreOfGravityInX() : IfcLengthMeasure | null
    {
        if ( this.CentreOfGravityInX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 21 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInX due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 21;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInX' );
                }

                this.CentreOfGravityInX_ = null;                
            }
            else
            {
                this.CentreOfGravityInX_ = value;
            }
        }

        return this.CentreOfGravityInX_ as IfcLengthMeasure | null;
    }


    public get CentreOfGravityInY() : IfcLengthMeasure | null
    {
        if ( this.CentreOfGravityInY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 22 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 22;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInY' );
                }

                this.CentreOfGravityInY_ = null;                
            }
            else
            {
                this.CentreOfGravityInY_ = value;
            }
        }

        return this.CentreOfGravityInY_ as IfcLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
