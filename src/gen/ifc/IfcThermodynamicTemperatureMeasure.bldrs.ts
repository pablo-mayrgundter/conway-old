
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermodynamictemperaturemeasure.htm
type IfcThermodynamicTemperatureMeasure = number;


export const IfcThermodynamicTemperatureMeasureSize = 8;

export function IfcThermodynamicTemperatureMeasureSerializer( value?: IfcThermodynamicTemperatureMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcThermodynamicTemperatureMeasureDeserializer( value?: IfcThermodynamicTemperatureMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcThermodynamicTemperatureMeasure;