
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmolecularweightmeasure.htm
type IfcMolecularWeightMeasure = number;


export const IfcMolecularWeightMeasureSize = 8;

export function IfcMolecularWeightMeasureSerializer( value?: IfcMolecularWeightMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMolecularWeightMeasureDeserializer( value?: IfcMolecularWeightMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMolecularWeightMeasure;