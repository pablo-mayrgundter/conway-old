
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundpressuremeasure.htm
type IfcSoundPressureMeasure = number;


export const IfcSoundPressureMeasureSize = 8;

export function IfcSoundPressureMeasureSerializer( value?: IfcSoundPressureMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcSoundPressureMeasureDeserializer( value?: IfcSoundPressureMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcSoundPressureMeasure;