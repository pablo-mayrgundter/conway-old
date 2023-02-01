
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrotationalmassmeasure.htm
type IfcRotationalMassMeasure = number;


export const IfcRotationalMassMeasureSize = 8;

export function IfcRotationalMassMeasureSerializer( value?: IfcRotationalMassMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcRotationalMassMeasureDeserializer( value?: IfcRotationalMassMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcRotationalMassMeasure;