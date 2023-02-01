
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwarpingmomentmeasure.htm
type IfcWarpingMomentMeasure = number;


export const IfcWarpingMomentMeasureSize = 8;

export function IfcWarpingMomentMeasureSerializer( value?: IfcWarpingMomentMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcWarpingMomentMeasureDeserializer( value?: IfcWarpingMomentMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcWarpingMomentMeasure;