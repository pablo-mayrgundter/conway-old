
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoseequivalentmeasure.htm
type IfcDoseEquivalentMeasure = number;


export const IfcDoseEquivalentMeasureSize = 8;

export function IfcDoseEquivalentMeasureSerializer( value?: IfcDoseEquivalentMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcDoseEquivalentMeasureDeserializer( value?: IfcDoseEquivalentMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcDoseEquivalentMeasure;