
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricchargemeasure.htm
type IfcElectricChargeMeasure = number;


export const IfcElectricChargeMeasureSize = 8;

export function IfcElectricChargeMeasureSerializer( value?: IfcElectricChargeMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricChargeMeasureDeserializer( value?: IfcElectricChargeMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricChargeMeasure;