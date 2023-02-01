
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcamountofsubstancemeasure.htm
type IfcAmountOfSubstanceMeasure = number;


export const IfcAmountOfSubstanceMeasureSize = 8;

export function IfcAmountOfSubstanceMeasureSerializer( value?: IfcAmountOfSubstanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcAmountOfSubstanceMeasureDeserializer( value?: IfcAmountOfSubstanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcAmountOfSubstanceMeasure;