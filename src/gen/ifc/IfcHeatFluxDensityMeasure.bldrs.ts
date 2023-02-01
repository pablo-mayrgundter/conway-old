
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatfluxdensitymeasure.htm
type IfcHeatFluxDensityMeasure = number;


export const IfcHeatFluxDensityMeasureSize = 8;

export function IfcHeatFluxDensityMeasureSerializer( value?: IfcHeatFluxDensityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcHeatFluxDensityMeasureDeserializer( value?: IfcHeatFluxDensityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcHeatFluxDensityMeasure;