
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclinearmomentmeasure.htm
type IfcLinearMomentMeasure = number;


export const IfcLinearMomentMeasureSize = 8;

export function IfcLinearMomentMeasureSerializer( value?: IfcLinearMomentMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcLinearMomentMeasureDeserializer( value?: IfcLinearMomentMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcLinearMomentMeasure;