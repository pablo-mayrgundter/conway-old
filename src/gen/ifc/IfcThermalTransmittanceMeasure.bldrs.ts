
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermaltransmittancemeasure.htm
type IfcThermalTransmittanceMeasure = number;


export const IfcThermalTransmittanceMeasureSize = 8;

export function IfcThermalTransmittanceMeasureSerializer( value?: IfcThermalTransmittanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcThermalTransmittanceMeasureDeserializer( value?: IfcThermalTransmittanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcThermalTransmittanceMeasure;