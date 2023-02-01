
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearstiffnessmeasure.htm
type IfcLinearStiffnessMeasure = number;


export const IfcLinearStiffnessMeasureSize = 8;

export function IfcLinearStiffnessMeasureSerializer( value?: IfcLinearStiffnessMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcLinearStiffnessMeasureDeserializer( value?: IfcLinearStiffnessMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcLinearStiffnessMeasure;