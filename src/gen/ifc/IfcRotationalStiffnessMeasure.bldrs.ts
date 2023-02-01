
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalstiffnessmeasure.htm
type IfcRotationalStiffnessMeasure = number;


export const IfcRotationalStiffnessMeasureSize = 8;

export function IfcRotationalStiffnessMeasureSerializer( value?: IfcRotationalStiffnessMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcRotationalStiffnessMeasureDeserializer( value?: IfcRotationalStiffnessMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcRotationalStiffnessMeasure;