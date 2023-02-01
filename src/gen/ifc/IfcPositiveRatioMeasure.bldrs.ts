
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';
import IfcRatioMeasure, {IfcRatioMeasureSerialize, IfcRatioMeasureDeserialize, IfcRatioMeasureSize } from "./IfcRatioMeasure.bldrs"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveratiomeasure.htm
type IfcPositiveRatioMeasure = IfcRatioMeasure;


export const IfcPositiveRatioMeasureSize = 8;

export function IfcPositiveRatioMeasureSerializer( value?: IfcPositiveRatioMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcPositiveRatioMeasureDeserializer( value?: IfcPositiveRatioMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcPositiveRatioMeasure;