
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalconductivitymeasure.htm
type IfcThermalConductivityMeasure = number;


export const IfcThermalConductivityMeasureSize = 8;

export function IfcThermalConductivityMeasureSerializer( value?: IfcThermalConductivityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcThermalConductivityMeasureDeserializer( value?: IfcThermalConductivityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcThermalConductivityMeasure;