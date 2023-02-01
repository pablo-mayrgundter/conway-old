
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcisothermalmoisturecapacitymeasure.htm
type IfcIsothermalMoistureCapacityMeasure = number;


export const IfcIsothermalMoistureCapacityMeasureSize = 8;

export function IfcIsothermalMoistureCapacityMeasureSerializer( value?: IfcIsothermalMoistureCapacityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcIsothermalMoistureCapacityMeasureDeserializer( value?: IfcIsothermalMoistureCapacityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcIsothermalMoistureCapacityMeasure;