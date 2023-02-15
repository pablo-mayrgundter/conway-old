import {describe, expect, test} from '@jest/globals';

import IfcStepParser from './ifc_step';
import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';

let parser = IfcStepParser.Instance;
let indexIfcBuffer = fs.readFileSync( 'index.ifc' );

function parseIndexIfcHeader()
{
    let bufferInput      = new ParsingBuffer( indexIfcBuffer );
    let [_, result] = parser.parseHeader( bufferInput );
    
    // console.log( "IFC header" );

    // for ( let [key,value] of header.headers )
    // {
    //     console.log( `${key} is ${value}` );
    // }

    return result;
}

function parseIndexIfcData()
{
    let bufferInput = new ParsingBuffer( indexIfcBuffer );
    let result0     = parser.parseHeader( bufferInput )[ 1 ];

    if ( result0 !== ParseResult.COMPLETE )
    {
        return result0;
    }

    let [_, result] = parser.parseDataBlock( bufferInput );

    // console.log( "IFC Data" );

    // for ( let element of items.elements )
    // {
    //     console.log( `${element.expressID} is type ${element.typeID ?? "Unknown"} as ${element.address}` );
    // }

    return result;
}



describe( "IFC Step Parsing Test", () => {
    test( "parseHeader()" , () =>{

        expect( parseIndexIfcHeader() ).toBe( ParseResult.COMPLETE );

     } )//,
     test( "parseInput()" , () =>{

         expect( parseIndexIfcData() ).toBe( ParseResult.COMPLETE );

     } );
});