
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricresistancemeasure.htm
type IfcElectricResistanceMeasure = number;


export const IfcElectricResistanceMeasureSize = 8;

export function IfcElectricResistanceMeasureSerializer( value?: IfcElectricResistanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricResistanceMeasureDeserializer( value?: IfcElectricResistanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricResistanceMeasure;