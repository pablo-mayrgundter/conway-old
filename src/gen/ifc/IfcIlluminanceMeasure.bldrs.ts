
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcilluminancemeasure.htm
type IfcIlluminanceMeasure = number;


export const IfcIlluminanceMeasureSize = 8;

export function IfcIlluminanceMeasureSerializer( value?: IfcIlluminanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcIlluminanceMeasureDeserializer( value?: IfcIlluminanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcIlluminanceMeasure;