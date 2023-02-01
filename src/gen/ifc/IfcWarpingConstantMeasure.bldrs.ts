
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwarpingconstantmeasure.htm
type IfcWarpingConstantMeasure = number;


export const IfcWarpingConstantMeasureSize = 8;

export function IfcWarpingConstantMeasureSerializer( value?: IfcWarpingConstantMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcWarpingConstantMeasureDeserializer( value?: IfcWarpingConstantMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcWarpingConstantMeasure;