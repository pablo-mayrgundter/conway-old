
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalresistancemeasure.htm
type IfcThermalResistanceMeasure = number;


export const IfcThermalResistanceMeasureSize = 8;

export function IfcThermalResistanceMeasureSerializer( value?: IfcThermalResistanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcThermalResistanceMeasureDeserializer( value?: IfcThermalResistanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcThermalResistanceMeasure;