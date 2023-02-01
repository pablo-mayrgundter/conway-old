
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdayinmonthnumber.htm
type IfcDayInMonthNumber = number;


export const IfcDayInMonthNumberSize = 8;

export function IfcDayInMonthNumberSerializer( value?: IfcDayInMonthNumber, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcDayInMonthNumberDeserializer( value?: IfcDayInMonthNumber, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcDayInMonthNumber;