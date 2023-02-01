
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofsubgradereactionmeasure.htm
type IfcModulusOfSubgradeReactionMeasure = number;


export const IfcModulusOfSubgradeReactionMeasureSize = 8;

export function IfcModulusOfSubgradeReactionMeasureSerializer( value?: IfcModulusOfSubgradeReactionMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcModulusOfSubgradeReactionMeasureDeserializer( value?: IfcModulusOfSubgradeReactionMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcModulusOfSubgradeReactionMeasure;