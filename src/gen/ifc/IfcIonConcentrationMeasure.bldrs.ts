
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcionconcentrationmeasure.htm
type IfcIonConcentrationMeasure = number;


export const IfcIonConcentrationMeasureSize = 8;

export function IfcIonConcentrationMeasureSerializer( value?: IfcIonConcentrationMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcIonConcentrationMeasureDeserializer( value?: IfcIonConcentrationMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcIonConcentrationMeasure;