
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofelasticitymeasure.htm
type IfcModulusOfElasticityMeasure = number;


export const IfcModulusOfElasticityMeasureSize = 8;

export function IfcModulusOfElasticityMeasureSerializer( value?: IfcModulusOfElasticityMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcModulusOfElasticityMeasureDeserializer( value?: IfcModulusOfElasticityMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcModulusOfElasticityMeasure;