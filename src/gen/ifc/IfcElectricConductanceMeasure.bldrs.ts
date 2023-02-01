
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricconductancemeasure.htm
type IfcElectricConductanceMeasure = number;


export const IfcElectricConductanceMeasureSize = 8;

export function IfcElectricConductanceMeasureSerializer( value?: IfcElectricConductanceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcElectricConductanceMeasureDeserializer( value?: IfcElectricConductanceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcElectricConductanceMeasure;