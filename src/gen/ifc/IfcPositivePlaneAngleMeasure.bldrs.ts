
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';
import IfcPlaneAngleMeasure, {IfcPlaneAngleMeasureSerialize, IfcPlaneAngleMeasureDeserialize, IfcPlaneAngleMeasureSize } from "./IfcPlaneAngleMeasure.bldrs"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpositiveplaneanglemeasure.htm
type IfcPositivePlaneAngleMeasure = IfcPlaneAngleMeasure;


export const IfcPositivePlaneAngleMeasureSize = 8;

export function IfcPositivePlaneAngleMeasureSerializer( value?: IfcPositivePlaneAngleMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcPositivePlaneAngleMeasureDeserializer( value?: IfcPositivePlaneAngleMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcPositivePlaneAngleMeasure;