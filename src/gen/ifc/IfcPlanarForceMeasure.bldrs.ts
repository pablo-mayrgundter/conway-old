
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarforcemeasure.htm
type IfcPlanarForceMeasure = number;


export const IfcPlanarForceMeasureSize = 8;

export function IfcPlanarForceMeasureSerializer( value?: IfcPlanarForceMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcPlanarForceMeasureDeserializer( value?: IfcPlanarForceMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcPlanarForceMeasure;