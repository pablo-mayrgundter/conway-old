
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcluminousintensitydistributionmeasure.htm
type IfcLuminousIntensityDistributionMeasure = number;


export const IfcLuminousIntensityDistributionMeasureSize = 8;

export function IfcLuminousIntensityDistributionMeasureSerializer( value?: IfcLuminousIntensityDistributionMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcLuminousIntensityDistributionMeasureDeserializer( value?: IfcLuminousIntensityDistributionMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcLuminousIntensityDistributionMeasure;