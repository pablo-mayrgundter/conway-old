
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricvoltagemeasure.htm
type IfcElectricVoltageMeasure = number;


export const IfcElectricVoltageMeasureSize = 8;

export function IfcElectricVoltageMeasureSerializer( value?: IfcElectricVoltageMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricVoltageMeasureDeserializer( value?: IfcElectricVoltageMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricVoltageMeasure;