
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonthinyearnumber.htm
type IfcMonthInYearNumber = number;


export const IfcMonthInYearNumberSize = 8;

export function IfcMonthInYearNumberSerializer( value?: IfcMonthInYearNumber, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMonthInYearNumberDeserializer( value?: IfcMonthInYearNumber, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMonthInYearNumber;