
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';
import IfcLengthMeasure, {IfcLengthMeasureSerialize, IfcLengthMeasureDeserialize, IfcLengthMeasureSize } from "./IfcLengthMeasure.bldrs"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositivelengthmeasure.htm
type IfcPositiveLengthMeasure = IfcLengthMeasure;


export const IfcPositiveLengthMeasureSize = 8;

export function IfcPositiveLengthMeasureSerializer( value?: IfcPositiveLengthMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcPositiveLengthMeasureDeserializer( value?: IfcPositiveLengthMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcPositiveLengthMeasure;