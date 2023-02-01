
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmoisturediffusivitymeasure.htm
type IfcMoistureDiffusivityMeasure = number;


export const IfcMoistureDiffusivityMeasureSize = 8;

export function IfcMoistureDiffusivityMeasureSerializer( value?: IfcMoistureDiffusivityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMoistureDiffusivityMeasureDeserializer( value?: IfcMoistureDiffusivityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMoistureDiffusivityMeasure;