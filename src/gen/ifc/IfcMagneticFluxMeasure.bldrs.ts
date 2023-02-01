
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmagneticfluxmeasure.htm
type IfcMagneticFluxMeasure = number;


export const IfcMagneticFluxMeasureSize = 8;

export function IfcMagneticFluxMeasureSerializer( value?: IfcMagneticFluxMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMagneticFluxMeasureDeserializer( value?: IfcMagneticFluxMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMagneticFluxMeasure;