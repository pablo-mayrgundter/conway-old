
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectriccapacitancemeasure.htm
type IfcElectricCapacitanceMeasure = number;


export const IfcElectricCapacitanceMeasureSize = 8;

export function IfcElectricCapacitanceMeasureSerializer( value?: IfcElectricCapacitanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricCapacitanceMeasureDeserializer( value?: IfcElectricCapacitanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricCapacitanceMeasure;