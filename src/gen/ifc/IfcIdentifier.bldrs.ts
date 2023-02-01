
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { SnapshotBuffer } from './ snapshot';
import { SmartBuffer } from 'smart-buffer';


// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcidentifier.htm
type IfcIdentifier = string;


export const IfcIdentifierSize = 4;

export function IfcIdentifierSerializer( value?: IfcIdentifier, to: SmartBuffer, offset?: number ): void
{
    if ( value == undefined ) 
    {
        to.writeUInt32LE( 0 );
    } 
    else 
    {
        to.writeUInt32LE( to.length, offset );
        to.writeUInt32LE( value.length );          
        to.writeString( value );          
    }}

export function IfcIdentifierDeserializer( value?: IfcIdentifier, from: SnapshotBuffer< SchemaSpecificationIFC >, offset?: number ): void
{
    ( () => { 
        let readOffset = from.readUInt32LE( offset ); 

        if ( readOffset == 0 )
        {
            return;
        }

        let stringSize = from.readUInt32LE( readOffset );
        
        return from.readString( stringSize );
    })()}

export default IfcIdentifier;