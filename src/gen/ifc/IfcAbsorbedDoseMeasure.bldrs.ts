
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcabsorbeddosemeasure.htm
type IfcAbsorbedDoseMeasure = number;


export const IfcAbsorbedDoseMeasureSize = 8;

export function IfcAbsorbedDoseMeasureSerializer( value?: IfcAbsorbedDoseMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcAbsorbedDoseMeasureDeserializer( value?: IfcAbsorbedDoseMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcAbsorbedDoseMeasure;