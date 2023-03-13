import {describe, expect, test} from '@jest/globals';

import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import StepModelBase from '../step_model_base';
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs';
import SchemaIfc from '../../gen/ifc/schema_ifc.bldrs';
import IfcStepParser from './ifc_step';
import StepEntitySchema from '../step_entity_schema';

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

    let [items, result] = parser.parseDataBlock( bufferInput );

    // console.log( "IFC Data" );

    // for ( let element of items.elements )
    // {
    //     console.log( `${element.expressID} is type ${element.typeID ?? "Unknown"} as ${element.address}` );
    // }

    return result;
}

function extractIFCData()
{
    let bufferInput = new ParsingBuffer( indexIfcBuffer );
    let result0     = parser.parseHeader( bufferInput )[ 1 ];

    if ( result0 !== ParseResult.COMPLETE )
    {
        return result0;
    }

    let [items, result] = parser.parseDataBlock( bufferInput );

    let model = new StepModelBase< EntityTypesIfc >( SchemaIfc, indexIfcBuffer, items.elements ); 

    let entities = Array.from( model );

    return result;
}


describe( "IFC Step Parsing Test", () => {
    test( "parseIndexIfcHeader()" , () =>{

        expect( parseIndexIfcHeader() ).toBe( ParseResult.COMPLETE );

     } );

     test( "parseIndexIfcData()" , () =>{

         expect( parseIndexIfcData() ).toBe( ParseResult.COMPLETE );

     } );
     
     test( "extractIFCData()" , () =>{

        expect( extractIFCData() ).toBe( ParseResult.COMPLETE );

    } );
});