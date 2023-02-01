
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentmeasure.htm
type IfcContextDependentMeasure = number;


export const IfcContextDependentMeasureSize = 8;

export function IfcContextDependentMeasureSerializer( value?: IfcContextDependentMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcContextDependentMeasureDeserializer( value?: IfcContextDependentMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcContextDependentMeasure;