import {describe, expect, test} from '@jest/globals';

import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import StepModelBase from '../step_model_base';
import EntityTypesIfc from '../../gen/ifc/entity_types_ifc.bldrs';
import SchemaIfc from '../../gen/ifc/schema_ifc.bldrs';
import IfcStepParser from './ifc_step_parser';
import { IfcAddressTypeEnum, IfcCartesianPoint, IfcClassification, IfcGeometricRepresentationSubContext, IfcPerson, IfcPostalAddress, IfcTelecomAddress } from '../../gen/ifc';

let parser = IfcStepParser.Instance;
let indexIfcBuffer = fs.readFileSync( 'index.ifc' );

function extractIFCData()
{
    let bufferInput = new ParsingBuffer( indexIfcBuffer );
    let result0     = parser.parseHeader( bufferInput )[ 1 ];

    if ( result0 !== ParseResult.COMPLETE )
    {
        return result0;
    }

    let [result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 )
    {
        return;
    }

    let entities = Array.from( model );

    if ( entities.length !== 217 )
    {
        return;
    }

    return result;
}

const derivedSubtextString = 
"#74= IFCDIRECTION((1.,0.,0.));\
#78= IFCDIRECTION((0.,0.,1.));\
#80= IFCCARTESIANPOINT((-10.245e-1,0.,-10.245e-1));\
#82= IFCAXIS2PLACEMENT3D(#80,#78,#74);\
#83= IFCDIRECTION((0.,1.));\
#85= IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.0E-5,#82,#83);\
#169= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,#85,$,.MODEL_VIEW.,$);";

const derivedSubtextStringBuffer = new TextEncoder().encode( derivedSubtextString );

function extractDerivedSubcontext()
{
    let bufferInput = new ParsingBuffer( derivedSubtextStringBuffer );

    let [result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 )
    {
        return false;
    }

    let geometricSubRepresentation = model.getElementByExpressID( 169 );

    if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) 
    {
        return false;
    }

    if ( geometricSubRepresentation.CoordinateSpaceDimension !== 3 )
    {
        return false;
    }

    if ( geometricSubRepresentation.ParentContext.expressID !== 85 )
    {
        return false;
    }

    if ( geometricSubRepresentation.Precision !== geometricSubRepresentation.ParentContext.Precision )
    {
        return false;
    }

    if ( geometricSubRepresentation.ContextIdentifier !== 'Body' )
    {
        return false;
    }
    
    if ( geometricSubRepresentation.TargetView !== 2 )
    {
        return false;
    }
    
    if ( geometricSubRepresentation.TargetScale !== null )
    {
        return false;
    }

    if ( geometricSubRepresentation.WorldCoordinateSystem.expressID !== 82 )
    {
        return false;
    }

    return true;
}


function extractScientificNumber()
{
    let bufferInput = new ParsingBuffer( derivedSubtextStringBuffer );

    let [result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 )
    {
        return false;
    }

    let geometricSubRepresentation = model.getElementByExpressID( 169 );

    if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) 
    {
        return false;
    }

    if ( geometricSubRepresentation.Precision !== 1e-5 )
    {
        return false;
    }
    
    let cartesianPoint = model.getElementByExpressID( 80 );

    if (!(cartesianPoint instanceof IfcCartesianPoint)) 
    {
        return false;
    }

    // Note, we actually test here for interning by using the same number twice in different spots and making sure they match values.
    if ( cartesianPoint.Coordinates.length !== 3 || cartesianPoint.Coordinates[ 2 ] !== -10.245e-1 || cartesianPoint.Coordinates[ 2 ] !== cartesianPoint.Coordinates[ 0 ] )
    {
        return false;
    }

    return true;
}



const personTestString = 
"#1= IFCPOSTALADDRESS(.USERDEFINED.,$,'Address',$,('Bldrs Plaza'),$,'The City',$,'0','AI');\
#5= IFCTELECOMADDRESS(.USERDEFINED.,$,'Phone',('+00 11 101 10 10'),$,$,$,'http://bldrs.ai',$);\
#7= IFCPERSON($,'Pablo',$,$,$,$,$,(#1,#5));";

const personTestStringStringBuffer = new TextEncoder().encode( personTestString );


function extractArraysTest()
{
    let bufferInput = new ParsingBuffer( personTestStringStringBuffer );

    let [ result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) )
    {
        return false;
    }

    let person = model.getElementByExpressID( 7 );

    if (!(person instanceof IfcPerson)) 
    {
        return false;
    }

    if ( person.Addresses === null || 
         person.Addresses.length !== 2 || 
         !(person.Addresses[ 0 ] instanceof IfcPostalAddress ) || 
         person.Addresses[ 0 ].expressID !== 1 || 
         !(person.Addresses[ 1 ] instanceof IfcTelecomAddress ) || 
         person.Addresses[ 1 ].expressID !== 5 )
    {
        return false;
    }
    
    let postal = model.getElementByExpressID( 1 );

    if (!(postal instanceof IfcPostalAddress)) 
    {
        return false;
    }

    if ( postal.AddressLines === null || 
        postal.AddressLines.length !== 1 || 
        postal.AddressLines[ 0 ] !== 'Bldrs Plaza' )
    {
        return false;
    }

    let telecom = model.getElementByExpressID( 5 );

    if (!(telecom instanceof IfcTelecomAddress)) 
    {
        return false;
    }

    if ( telecom.TelephoneNumbers === null || 
        telecom.TelephoneNumbers.length !== 1 || 
        telecom.TelephoneNumbers[ 0 ] !== '+00 11 101 10 10' )
    {
        return false;
    }

    return true;
}

function extractEnumsTest()
{
    let bufferInput = new ParsingBuffer( personTestStringStringBuffer );

    let [ result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) )
    {
        return false;
    }

    let postal = model.getElementByExpressID( 1 );

    if (!(postal instanceof IfcPostalAddress)) 
    {
        return false;
    }

    if ( postal.Purpose !== IfcAddressTypeEnum.USERDEFINED )
    {
        return false;
    }

    let telecom = model.getElementByExpressID( 5 );

    if (!(telecom instanceof IfcTelecomAddress)) 
    {
        return false;
    }

    if ( telecom.Purpose !== IfcAddressTypeEnum.USERDEFINED )
    {
        return false;
    }

    return true;
}

const classificationTestString = 
"#314= IFCCLASSIFICATION('SP - GK\\X2\\00FC\\X0\\r','2.0','2022-02-28','BLDRS','Klassifizirunssystem f\\X2\\00FC\\X0\\r BLDRS Logo','SP - GK',$);";

 const classificationTestStringBuffer = new TextEncoder().encode( classificationTestString );

function extractStringTest()
{
    let bufferInput = new ParsingBuffer( classificationTestStringBuffer );

    let [ result, model] = parser.parseDataToModel( bufferInput );

    if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) )
    {
        return false;
    }

    let classification = model.getElementByExpressID( 314 );

    if (!(classification instanceof IfcClassification )) 
    {
        return false;
    }

    if ( classification.Source !== 'SP - GK\u00FCr' )
    {
        return false;
    }

    return true;
}

describe( "IFC Step Model Test", () => {

     test( "extractIFCData()" , () =>{

        expect( extractIFCData() ).toBe( ParseResult.COMPLETE );

    } );

    test( "extractDerivedSubcontext()" , () =>{

        expect( extractDerivedSubcontext() ).toBe( true );

    } );    

    test( "extractScientificNumber()" , () =>{

        expect( extractScientificNumber() ).toBe( true );

    } );

    test( "extractArraysTest()" , () =>{

        expect( extractArraysTest() ).toBe( true );

    } );
        
    test( "extractEnumsTest()" , () =>{

        expect( extractEnumsTest() ).toBe( true );

    } );
            
    test( "extractStringTest()" , () =>{

        expect( extractStringTest() ).toBe( true );

    } );
});