
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctemperaturegradientmeasure.htm
type IfcTemperatureGradientMeasure = number;


export const IfcTemperatureGradientMeasureSize = 8;

export function IfcTemperatureGradientMeasureSerializer( value?: IfcTemperatureGradientMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcTemperatureGradientMeasureDeserializer( value?: IfcTemperatureGradientMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcTemperatureGradientMeasure;