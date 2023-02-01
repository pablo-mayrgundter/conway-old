
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';
import IfcRatioMeasure, {IfcRatioMeasureSerialize, IfcRatioMeasureDeserialize, IfcRatioMeasureSize } from "./IfcRatioMeasure.bldrs"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnormalisedratiomeasure.htm
type IfcNormalisedRatioMeasure = IfcRatioMeasure;


export const IfcNormalisedRatioMeasureSize = 8;

export function IfcNormalisedRatioMeasureSerializer( value?: IfcNormalisedRatioMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcNormalisedRatioMeasureDeserializer( value?: IfcNormalisedRatioMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcNormalisedRatioMeasure;