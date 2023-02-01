
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboolean.htm
type IfcBoolean = boolean;


export const IfcBooleanSize = 1;

export function IfcBooleanSerializer( value?: IfcBoolean, to: SmartBuffer, offset?: number ): void
{    to.writeUInt8( ( value === undefined ) ? 3 : ( value ? 1 : 0 ), offset )}

export function IfcBooleanDeserializer( value?: IfcBoolean, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readValue = from.readUInt8( offset ); 
        
        if ( readValue > 2 )
        {
            throw new Error( 'Read Invalid Value' );
        }

        return readValue == 0 ? false : ( readValue == 1 ? true : undefined );
    })()}

export default IfcBoolean;