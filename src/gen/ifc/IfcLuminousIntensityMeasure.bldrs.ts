
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcluminousintensitymeasure.htm
type IfcLuminousIntensityMeasure = number;


export const IfcLuminousIntensityMeasureSize = 8;

export function IfcLuminousIntensityMeasureSerializer( value?: IfcLuminousIntensityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcLuminousIntensityMeasureDeserializer( value?: IfcLuminousIntensityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcLuminousIntensityMeasure;