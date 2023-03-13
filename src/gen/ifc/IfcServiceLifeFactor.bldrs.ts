
import { IfcPropertySetDefinition } from "./index"
import { IfcServiceLifeFactorTypeEnum, IfcServiceLifeFactorTypeEnumDeserializeStep } from "./index"
import { IfcVolumeMeasure } from "./index"
import { IfcTimeMeasure } from "./index"
import { IfcThermodynamicTemperatureMeasure } from "./index"
import { IfcSolidAngleMeasure } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcRatioMeasure } from "./index"
import { IfcPositivePlaneAngleMeasure } from "./index"
import { IfcPlaneAngleMeasure } from "./index"
import { IfcParameterValue } from "./index"
import { IfcNumericMeasure } from "./index"
import { IfcMassMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcElectricCurrentMeasure } from "./index"
import { IfcDescriptiveMeasure } from "./index"
import { IfcCountMeasure } from "./index"
import { IfcContextDependentMeasure } from "./index"
import { IfcAreaMeasure } from "./index"
import { IfcAmountOfSubstanceMeasure } from "./index"
import { IfcLuminousIntensityMeasure } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcComplexNumber } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcservicelifefactor.htm */
export  class IfcServiceLifeFactor extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSERVICELIFEFACTOR;
    }

    private PredefinedType_? : IfcServiceLifeFactorTypeEnum;
    private UpperValue_? : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null;
    private MostUsedValue_? : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber;
    private LowerValue_? : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null;

    public get PredefinedType() : IfcServiceLifeFactorTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.PredefinedType_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcServiceLifeFactorTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.PredefinedType_ as IfcServiceLifeFactorTypeEnum;
    }

    public get UpperValue() : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null
    {
        if ( this.UpperValue_ === void 0 )
        {
            this.UpperValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value : Array<number> = [];
        
                    for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
                    {
                        value.push( (() => { 
                            let cursor = address;
                        
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    };
                        
                                    return value;
                        })() );
                    }
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.UpperValue_ as IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null;
    }

    public get MostUsedValue() : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber
    {
        if ( this.MostUsedValue_ === void 0 )
        {
            this.MostUsedValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value : Array<number> = [];
        
                    for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
                    {
                        value.push( (() => { 
                            let cursor = address;
                        
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    };
                        
                                    return value;
                        })() );
                    }
        
        return value; } )();

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.MostUsedValue_ as IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber;
    }

    public get LowerValue() : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null
    {
        if ( this.LowerValue_ === void 0 )
        {
            this.LowerValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value : Array<number> = [];
        
                    for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
                    {
                        value.push( (() => { 
                            let cursor = address;
                        
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    };
                        
                                    return value;
                        })() );
                    }
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.LowerValue_ as IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
