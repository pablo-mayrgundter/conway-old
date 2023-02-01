
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompoundplaneanglemeasure.htm
type IfcCompoundPlaneAngleMeasure = Array<number>;


export const IfcCompoundPlaneAngleMeasureSize = 8;

export function IfcCompoundPlaneAngleMeasureSerializer( value?: IfcCompoundPlaneAngleMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcCompoundPlaneAngleMeasureDeserializer( value?: IfcCompoundPlaneAngleMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcCompoundPlaneAngleMeasure;