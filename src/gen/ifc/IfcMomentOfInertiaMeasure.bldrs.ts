
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmomentofinertiameasure.htm
type IfcMomentOfInertiaMeasure = number;


export const IfcMomentOfInertiaMeasureSize = 8;

export function IfcMomentOfInertiaMeasureSerializer( value?: IfcMomentOfInertiaMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMomentOfInertiaMeasureDeserializer( value?: IfcMomentOfInertiaMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMomentOfInertiaMeasure;