import { exit } from 'process';
import IfcStepParser from './ifc_step_parser';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs';
import yargs from 'yargs/yargs';

import fs from 'fs';
import StepEntityBase from '../step_entity_base';

let args = 
    yargs(process.argv.slice(2))
        .command( '$0 <filename>', 'Query file', (yargs) => 
        {
            yargs.option( 'express_ids', { describe: 'A list of express IDs', type: 'number', array: true, alias: 'e' } );
            yargs.option( 'types', { describe: 'A list of express IDs', type: 'string', array: true, alias: 't' } );
            yargs.option( 'fields', { describe: 'A list of fields to extract', type: 'string', array: true, alias: 'f' } );
            yargs.positional( 'filename', { describe: 'IFC File Paths', type: 'string' } );
    
        }, ( argv ) =>
        {
            let ifcFile = argv[ 'filename' ] as string;

            let indexIfcBuffer: Buffer | undefined;

            let expressIDs = ( argv[ 'express_ids'] as number[] | undefined ); 
            let types      = ( argv[ 'types'] as string[] | undefined )?.map( ( value ) => { return EntityTypesIfc[ value.toLocaleUpperCase() as keyof typeof EntityTypesIfc ]; } ).filter( value => value !== void 0 ); 
            let fields     = ( argv[ 'fields' ] as string[] | undefined ) ?? [ 'expressID', 'type', 'localID' ]; 

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
            let [ result, model ]  = parser.parseDataToModel( bufferInput );
            let parseDataTimeEnd   = Date.now();
           
            if ( model === void 0 )
            {
                return; 
            }
            
            console.log( "\n" );

            console.log( fields.reduce( ( previous, current, currentIndex ) => {

                return `${previous}${( currentIndex === 0 ) ? '|' : ''}${current}|`;

            } , "" ) );

            console.log( fields.reduce( ( previous, current, currentIndex ) => {

                return `${previous}${( currentIndex === 0 ) ? '|' : ''}---|`;

            } , "" ) );

            let rowCount = 0;

            for ( let element of ( expressIDs?.map( ( value ) => model?.getElementByExpressID( value ) )?.filter( value => value !== void 0 ) ?? model ) as StepEntityBase< EntityTypesIfc >[] )
            {
                if ( types !== void 0 && !types.includes( element.type ) )
                {
                    continue;
                }
                
                let elementTypeID = EntityTypesIfc[ element.type ];

                console.log( 
                    fields.reduce( ( previous, current, currentIndex ) => {

                        let result;

                        try
                        {
                            if ( current === 'type')
                            {
                                result = elementTypeID;
                            }
                            else
                            {
                                result = ( (element as { [key: string]: any })[ current ] );

                                if ( result === null )
                                {
                                    result = 'null';
                                }
                                else if ( result === void 0 )
                                {
                                    result = '   '
                                }
                                else if ( current === 'expressID' )
                                {
                                    result = '#' + result;
                                }
                            }
                        }
                        catch ( ex )
                        {
                            result = 'err';
                        }

                        return `${previous}${( currentIndex === 0 ) ? '|' : ''}${result}|`;

                    } , "" ) );

                    ++rowCount;
            }

            console.log( "\n" );
            console.log( `Row Count: ${rowCount}` );
            console.log( `Header parse time ${headerDataTimeEnd - headerDataTimeStart} ms` );
            console.log( `Data parse time ${parseDataTimeEnd - parseDataTimeStart} ms` );
        })
        .help().argv;
