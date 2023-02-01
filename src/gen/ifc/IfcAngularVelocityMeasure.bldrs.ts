
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcangularvelocitymeasure.htm
type IfcAngularVelocityMeasure = number;


export const IfcAngularVelocityMeasureSize = 8;

export function IfcAngularVelocityMeasureSerializer( value?: IfcAngularVelocityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcAngularVelocityMeasureDeserializer( value?: IfcAngularVelocityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcAngularVelocityMeasure;