
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdaylightsavinghour.htm
type IfcDaylightSavingHour = number;


export const IfcDaylightSavingHourSize = 8;

export function IfcDaylightSavingHourSerializer( value?: IfcDaylightSavingHour, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcDaylightSavingHourDeserializer( value?: IfcDaylightSavingHour, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcDaylightSavingHour;