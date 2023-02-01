
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalfrequencymeasure.htm
type IfcRotationalFrequencyMeasure = number;


export const IfcRotationalFrequencyMeasureSize = 8;

export function IfcRotationalFrequencyMeasureSerializer( value?: IfcRotationalFrequencyMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcRotationalFrequencyMeasureDeserializer( value?: IfcRotationalFrequencyMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcRotationalFrequencyMeasure;