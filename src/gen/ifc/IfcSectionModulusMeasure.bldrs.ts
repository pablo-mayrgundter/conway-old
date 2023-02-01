
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionmodulusmeasure.htm
type IfcSectionModulusMeasure = number;


export const IfcSectionModulusMeasureSize = 8;

export function IfcSectionModulusMeasureSerializer( value?: IfcSectionModulusMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcSectionModulusMeasureDeserializer( value?: IfcSectionModulusMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcSectionModulusMeasure;