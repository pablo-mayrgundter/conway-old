import { argv, exit } from 'process';
import IfcStepParser from './ifc_step';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs';

import fs from 'fs';

let args = process.argv;

if ( args.length < 3 )
{
    console.log( "No arguments provided, expected a IFC file" );
    exit();
}

let ifcFile = args[ 2 ];

let indexIfcBuffer: Buffer | undefined;

try
{
    indexIfcBuffer = fs.readFileSync( ifcFile );
}
catch ( ex )
{
    console.log( "Error: couldn't read file into memory, check that it is accessible at the specified path.");
    exit();
}

if ( indexIfcBuffer === void 0 )
{
    console.log( "Error: couldn't read file into memory, check that it is accessible at the specified path.");
    exit();
}

let parser      = IfcStepParser.Instance;
let bufferInput = new ParsingBuffer( indexIfcBuffer );

let headerDataTimeStart = Date.now();

let result0     = parser.parseHeader( bufferInput )[ 1 ];

let headerDataTimeEnd = Date.now();


switch ( result0 )
{
case ParseResult.COMPLETE:

    console.log( "Parse completed successfully" );
    break;

case ParseResult.INCOMPLETE:

    console.log( "Parse incomplete but no errors" );
    break;
    
case ParseResult.INVALID_STEP:

    console.log( "Error: Invalid STEP detected in parse, but no syntax error detected" );
    break;

case ParseResult.MISSING_TYPE:

    console.log( "Error: missing STEP type, but no syntax error detected" );
    break;

case ParseResult.SYNTAX_ERROR:

    console.log( `Error: Syntax error detected on line ${bufferInput.lineCount}` );
    break;

}

let parseDataTimeStart = Date.now();
let [ items, result]   = parser.parseDataBlock( bufferInput );
let parseDataTimeEnd   = Date.now();

console.log( "IFC Data" );

for ( let element of items.elements )
{
    let elementTypeID = "Unknown";

    if ( element.typeID !== void 0 )
    {
        elementTypeID = EntityTypesIfc[ element.typeID ]
    }

    console.log( `${element.expressID} is type ${elementTypeID} as ${element.address}` );
}

console.log( `Header parse time ${headerDataTimeEnd - headerDataTimeStart} ms` );
console.log( `Data parse time ${parseDataTimeEnd - parseDataTimeStart} ms` );