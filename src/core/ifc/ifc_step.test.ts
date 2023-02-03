import {describe, expect, test} from '@jest/globals';

import IfcStepParser from './ifc_step';
import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';

let parser = IfcStepParser.Instance;
let input = fs.readFileSync( 'index.ifc' );

function parseHeader()
{
    let bufferInput      = new ParsingBuffer( input );
    let [header, result] = parser.parseHeader( bufferInput );
    
    console.log( "IFC header" );

    for ( let [key,value] of header.headers )
    {
        console.log( `${key} is ${value}` );
    }

    return result;
}

function parseInput()
{
    let bufferInput = new ParsingBuffer( input );
    let result0     = parser.parseHeader( bufferInput )[ 1 ];

    if ( result0 !== ParseResult.COMPLETE )
    {
        return result0;
    }

    let [items, result] = parser.parseDataBlock( bufferInput );

    console.log( "IFC Data" );

    for ( let element of items.elements )
    {
        console.log( `${element.expressID} is type ${element.typeID ?? "Unknown"} as ${element.address}` );
    }

    return result;
}


describe( "IFC Step Parsing Test", () => {
    test( "parseHeader()" , () =>{

        expect( parseHeader() ).toBe( ParseResult.COMPLETE );

     } )//,
     test( "parseInput()" , () =>{

         expect( parseInput() ).toBe( ParseResult.COMPLETE );

     } );
});