
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmagneticfluxdensitymeasure.htm
type IfcMagneticFluxDensityMeasure = number;


export const IfcMagneticFluxDensityMeasureSize = 8;

export function IfcMagneticFluxDensityMeasureSerializer( value?: IfcMagneticFluxDensityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcMagneticFluxDensityMeasureDeserializer( value?: IfcMagneticFluxDensityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcMagneticFluxDensityMeasure;