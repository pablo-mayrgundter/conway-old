
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatingvaluemeasure.htm
type IfcHeatingValueMeasure = number;


export const IfcHeatingValueMeasureSize = 8;

export function IfcHeatingValueMeasureSerializer( value?: IfcHeatingValueMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcHeatingValueMeasureDeserializer( value?: IfcHeatingValueMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcHeatingValueMeasure;