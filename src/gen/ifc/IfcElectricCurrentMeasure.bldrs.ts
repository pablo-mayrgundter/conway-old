
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectriccurrentmeasure.htm
type IfcElectricCurrentMeasure = number;


export const IfcElectricCurrentMeasureSize = 8;

export function IfcElectricCurrentMeasureSerializer( value?: IfcElectricCurrentMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricCurrentMeasureDeserializer( value?: IfcElectricCurrentMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricCurrentMeasure;