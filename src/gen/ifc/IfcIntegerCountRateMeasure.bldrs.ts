
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcintegercountratemeasure.htm
type IfcIntegerCountRateMeasure = number;


export const IfcIntegerCountRateMeasureSize = 8;

export function IfcIntegerCountRateMeasureSerializer( value?: IfcIntegerCountRateMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcIntegerCountRateMeasureDeserializer( value?: IfcIntegerCountRateMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcIntegerCountRateMeasure;