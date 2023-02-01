
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvaporpermeabilitymeasure.htm
type IfcVaporPermeabilityMeasure = number;


export const IfcVaporPermeabilityMeasureSize = 8;

export function IfcVaporPermeabilityMeasureSerializer( value?: IfcVaporPermeabilityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcVaporPermeabilityMeasureDeserializer( value?: IfcVaporPermeabilityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcVaporPermeabilityMeasure;