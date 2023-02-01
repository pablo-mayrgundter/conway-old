
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalexpansioncoefficientmeasure.htm
type IfcThermalExpansionCoefficientMeasure = number;


export const IfcThermalExpansionCoefficientMeasureSize = 8;

export function IfcThermalExpansionCoefficientMeasureSerializer( value?: IfcThermalExpansionCoefficientMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcThermalExpansionCoefficientMeasureDeserializer( value?: IfcThermalExpansionCoefficientMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcThermalExpansionCoefficientMeasure;