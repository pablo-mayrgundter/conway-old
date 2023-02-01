
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpowermeasure.htm
type IfcSoundPowerMeasure = number;


export const IfcSoundPowerMeasureSize = 8;

export function IfcSoundPowerMeasureSerializer( value?: IfcSoundPowerMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcSoundPowerMeasureDeserializer( value?: IfcSoundPowerMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcSoundPowerMeasure;