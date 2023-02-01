
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusoflinearsubgradereactionmeasure.htm
type IfcModulusOfLinearSubgradeReactionMeasure = number;


export const IfcModulusOfLinearSubgradeReactionMeasureSize = 8;

export function IfcModulusOfLinearSubgradeReactionMeasureSerializer( value?: IfcModulusOfLinearSubgradeReactionMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcModulusOfLinearSubgradeReactionMeasureDeserializer( value?: IfcModulusOfLinearSubgradeReactionMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcModulusOfLinearSubgradeReactionMeasure;