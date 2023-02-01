
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmodulusofrotationalsubgradereactionmeasure.htm
type IfcModulusOfRotationalSubgradeReactionMeasure = number;


export const IfcModulusOfRotationalSubgradeReactionMeasureSize = 8;

export function IfcModulusOfRotationalSubgradeReactionMeasureSerializer( value?: IfcModulusOfRotationalSubgradeReactionMeasure, to: SmartBuffer, offset?: number ): void
{    to.writeDoubleLE( ( value === undefined ) ? NaN : value, offset )}

export function IfcModulusOfRotationalSubgradeReactionMeasureDeserializer( value?: IfcModulusOfRotationalSubgradeReactionMeasure, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readDoubleLE( offset ); 

        return Number.isNaN( readValue ) ? undefined : readValue;
    })()}

export default IfcModulusOfRotationalSubgradeReactionMeasure;