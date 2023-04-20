import {describe, expect, test} from '@jest/globals'

import fs from 'fs'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'
import {ParseResult} from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import IfcStepParser from './ifc_step_parser'
import {IfcAddressTypeEnum, IfcCartesianPoint, IfcCartesianPointList, IfcCartesianPointList3D, IfcClassification, IfcGeometricRepresentationSubContext, IfcPerson, IfcPostalAddress, IfcShapeAspect, IfcTelecomAddress} from '../../gen/ifc'


const parser = IfcStepParser.Instance
const indexIfcBuffer = fs.readFileSync( 'index.ifc' )

/**
 *
 */
function extractIFCData() {
  const bufferInput = new ParsingBuffer( indexIfcBuffer )
  const result0 = parser.parseHeader( bufferInput )[1]

  if ( result0 !== ParseResult.COMPLETE ) {
    return result0
  }

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ) {
    return
  }

  const entities = Array.from( model )

  if ( entities.length !== 287 ) {
    return
  }

  return result
}

const ifcShapeAspectString = '#767= IFCSHAPEASPECT((#765),\'BLDRS-Logo-grey\',\'\',.U.,#761);'

const ifcShapeAspectStringBuffer = new TextEncoder().encode( ifcShapeAspectString )


/**
 *
 */
function extractLogical() {
  const bufferInput = new ParsingBuffer( ifcShapeAspectStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ) {
    return false
  }

  const shapeAspect = model.getElementByExpressID( 767 )

  if (!(shapeAspect instanceof IfcShapeAspect)) {
    return false
  }

  if ( shapeAspect.ProductDefinitional !== null ) {
    return false
  }

  return true
}

const ifcCartesianPoint3DString = '#171= IFCCARTESIANPOINTLIST3D(((76.,-11.4504049888,0.),(76.,-11.4504049888,15.),(76.,0.,15.),(76.,0.,0.),(86.,-11.4504049888,15.),(86.,-11.4504049888,0.),(86.,0.,15.),(86.,0.,0.)));'

const ifcCartesianPoint3DStringBuffer = new TextEncoder().encode( ifcCartesianPoint3DString )

/**
 *
 */
function extractCartesianPointList3D() {
  const bufferInput = new ParsingBuffer( ifcCartesianPoint3DStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ) {
    return false
  }

  const cartesianPointList3D = model.getElementByExpressID( 171 )

  if (!(cartesianPointList3D instanceof IfcCartesianPointList3D)) {
    return false
  }

  if ( cartesianPointList3D.CoordList.length !== 8 ) {
    return false
  }

  const equalArrays = ( a: number[], b: number[] ) => a.length === b.length && a.every( ( value, index ) => value === b[index] )

  if ( !equalArrays( cartesianPointList3D.CoordList[0], [76., -11.4504049888, 0.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[1], [76., -11.4504049888, 15.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[2], [76., 0., 15.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[3], [76., 0., 0.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[4], [86., -11.4504049888, 15.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[5], [86., -11.4504049888, 0.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[6], [86., 0., 15.]) ) {
    return false
  }

  if ( !equalArrays( cartesianPointList3D.CoordList[7], [86., 0., 0.]) ) {
    return false
  }

  return true
}

const derivedSubtextString =
'#74= IFCDIRECTION((1.,0.,0.));\
#78= IFCDIRECTION((0.,0.,1.));\
#80= IFCCARTESIANPOINT((-10.245e-1,0.973380492763,-10.245e-1));\
#82= IFCAXIS2PLACEMENT3D(#80,#78,#74);\
#83= IFCDIRECTION((0.,1.));\
#85= IFCGEOMETRICREPRESENTATIONCONTEXT($,\'Model\',3,1.0E-5,#82,#83);\
#169= IFCGEOMETRICREPRESENTATIONSUBCONTEXT(\'Body\',\'Model\',*,*,*,*,#85,$,.MODEL_VIEW.,$);'

const derivedSubtextStringBuffer = new TextEncoder().encode( derivedSubtextString )

/**
 *
 */
function extractDerivedSubcontext() {
  const bufferInput = new ParsingBuffer( derivedSubtextStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ) {
    return false
  }

  const geometricSubRepresentation = model.getElementByExpressID( 169 )

  if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) {
    return false
  }

  if ( geometricSubRepresentation.CoordinateSpaceDimension !== 3 ) {
    return false
  }

  if ( geometricSubRepresentation.ParentContext.expressID !== 85 ) {
    return false
  }

  if ( geometricSubRepresentation.Precision !== geometricSubRepresentation.ParentContext.Precision ) {
    return false
  }

  if ( geometricSubRepresentation.ContextIdentifier !== 'Body' ) {
    return false
  }

  if ( geometricSubRepresentation.TargetView !== 2 ) {
    return false
  }

  if ( geometricSubRepresentation.TargetScale !== null ) {
    return false
  }

  if ( geometricSubRepresentation.WorldCoordinateSystem.expressID !== 82 ) {
    return false
  }

  return true
}

/**
 *
 */
function extractScientificNumber() {
  const bufferInput = new ParsingBuffer( derivedSubtextStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ) {
    return false
  }

  const geometricSubRepresentation = model.getElementByExpressID( 169 )

  if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) {
    return false
  }

  if ( geometricSubRepresentation.Precision !== 1e-5 ) {
    return false
  }

  const cartesianPoint = model.getElementByExpressID( 80 )

  if (!(cartesianPoint instanceof IfcCartesianPoint)) {
    return false
  }

  // Note, we actually test here for interning by using the same number twice in different spots and making sure they match values.
  if ( cartesianPoint.Coordinates.length !== 3 || cartesianPoint.Coordinates[1] !== 0.973380492763 || cartesianPoint.Coordinates[2] !== -10.245e-1 || cartesianPoint.Coordinates[2] !== cartesianPoint.Coordinates[0] ) {
    return false
  }

  return true
}


const personTestString =
'#1= IFCPOSTALADDRESS(.USERDEFINED.,$,\'Address\',$,(\'Bldrs Plaza\'),$,\'The City\',$,\'0\',\'AI\');\
#5= IFCTELECOMADDRESS(.USERDEFINED.,$,\'Phone\',(\'+00 11 101 10 10\'),$,$,$,\'http://bldrs.ai\',$);\
#7= IFCPERSON($,\'Pablo\',$,$,$,$,$,(#1,#5));'

const personTestStringStringBuffer = new TextEncoder().encode( personTestString )


/**
 *
 */
function extractArraysTest() {
  const bufferInput = new ParsingBuffer( personTestStringStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const person = model.getElementByExpressID( 7 )

  if (!(person instanceof IfcPerson)) {
    return false
  }

  if ( person.Addresses === null ||
         person.Addresses.length !== 2 ||
         !(person.Addresses[0] instanceof IfcPostalAddress ) ||
         person.Addresses[0].expressID !== 1 ||
         !(person.Addresses[1] instanceof IfcTelecomAddress ) ||
         person.Addresses[1].expressID !== 5 ) {
    return false
  }

  const postal = model.getElementByExpressID( 1 )

  if (!(postal instanceof IfcPostalAddress)) {
    return false
  }

  if ( postal.AddressLines === null ||
        postal.AddressLines.length !== 1 ||
        postal.AddressLines[0] !== 'Bldrs Plaza' ) {
    return false
  }

  const telecom = model.getElementByExpressID( 5 )

  if (!(telecom instanceof IfcTelecomAddress)) {
    return false
  }

  if ( telecom.TelephoneNumbers === null ||
        telecom.TelephoneNumbers.length !== 1 ||
        telecom.TelephoneNumbers[0] !== '+00 11 101 10 10' ) {
    return false
  }

  return true
}

/**
 *
 */
function extractEnumsTest() {
  const bufferInput = new ParsingBuffer( personTestStringStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const postal = model.getElementByExpressID( 1 )

  if (!(postal instanceof IfcPostalAddress)) {
    return false
  }

  if ( postal.Purpose !== IfcAddressTypeEnum.USERDEFINED ) {
    return false
  }

  const telecom = model.getElementByExpressID( 5 )

  if (!(telecom instanceof IfcTelecomAddress)) {
    return false
  }

  if ( telecom.Purpose !== IfcAddressTypeEnum.USERDEFINED ) {
    return false
  }

  return true
}

const classificationTestString =
'#314= IFCCLASSIFICATION(\'SP - GK\\X2\\00FC\\X0\\r\',\'2.0\',\'2022-02-28\',\'BLDRS\',\'Klassifizirunssystem f\\X2\\00FC\\X0\\r BLDRS Logo\',\'SP - GK\',$);'

const classificationTestStringBuffer = new TextEncoder().encode( classificationTestString )

/**
 *
 */
function extractStringTest() {
  const bufferInput = new ParsingBuffer( classificationTestStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const classification = model.getElementByExpressID( 314 )

  if (!(classification instanceof IfcClassification )) {
    return false
  }

  if ( classification.Source !== 'SP - GK\u00FCr' ) {
    return false
  }

  return true
}

/**
 *
 */
function indexTypeTest() {
  const bufferInput = new ParsingBuffer( indexIfcBuffer )
  const result0 = parser.parseHeader( bufferInput )[1]

  if ( result0 !== ParseResult.COMPLETE ) {
    return false
  }

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 || ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const pointListsAndPeople = model.types( IfcCartesianPointList, IfcPerson )
  const entities = Array.from( pointListsAndPeople )

  return entities.every( (entity) => entity instanceof IfcCartesianPointList3D || entity instanceof IfcPerson ) && entities.length === 8
}

describe( 'IFC Step Model Test', () => {
  test( 'extractIFCData()', () => {
    expect( extractIFCData() ).toBe( ParseResult.COMPLETE )
  } )

  test( 'extractLogical()', () => {
    expect( extractLogical() ).toBe( true )
  } )

  test( 'extractCartesianPointList3D()', () => {
    expect( extractCartesianPointList3D() ).toBe( true )
  } )

  test( 'extractDerivedSubcontext()', () => {
    expect( extractDerivedSubcontext() ).toBe( true )
  } )

  test( 'extractScientificNumber()', () => {
    expect( extractScientificNumber() ).toBe( true )
  } )

  test( 'extractArraysTest()', () => {
    expect( extractArraysTest() ).toBe( true )
  } )

  test( 'extractEnumsTest()', () => {
    expect( extractEnumsTest() ).toBe( true )
  } )

  test( 'extractStringTest()', () => {
    expect( extractStringTest() ).toBe( true )
  } )

  test( 'indexTypeTest()', () => {
    expect( indexTypeTest() ).toBe( true )
  } )
})
