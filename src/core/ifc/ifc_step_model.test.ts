import {describe, expect, test} from '@jest/globals'

import fs from 'fs'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'
import {ParseResult} from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import IfcStepParser from './ifc_step_parser'
import {
  IfcAddressTypeEnum,
  IfcCartesianPoint,
  IfcCartesianPointList,
  IfcCartesianPointList3D,
  IfcClassification,
  IfcGeometricRepresentationSubContext,
  IfcPerson,
  IfcPostalAddress,
  IfcShapeAspect,
  IfcTelecomAddress,
} from '../../gen/ifc'


const parser = IfcStepParser.Instance
const indexIfcBuffer = fs.readFileSync( 'index.ifc' )

const EXPECTED_ENTITY_COUNT = 287

/**
 * Test of extracting the IFC data from index.ifc and getting the right number of entities.
 *
 * @return {ParseResult | undefined} Undefined if the model is not parsed, otherwise the parse
 * result.
 */
function extractIFCData(): ParseResult | undefined {
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

  if ( entities.length !== EXPECTED_ENTITY_COUNT ) {
    return
  }

  return result
}

const ifcShapeAspectString = '#767= IFCSHAPEASPECT((#765),\'BLDRS-Logo-grey\',\'\',.U.,#761);'

const ifcShapeAspectStringBuffer = new TextEncoder().encode( ifcShapeAspectString )

const SHAPE_ASPECT_EXPRESS_ID = 767

/**
 * Test for extractiong a logical value from STEP.
 *
 * @return {boolean} True if the test succeeds, false if it doesn't.
 */
function extractLogical() {
  const bufferInput = new ParsingBuffer( ifcShapeAspectStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( result !== ParseResult.COMPLETE ) {
    return false
  }

  if ( model === void 0 ) {
    return false
  }

  const shapeAspect = model.getElementByExpressID( SHAPE_ASPECT_EXPRESS_ID )

  if (!(shapeAspect instanceof IfcShapeAspect)) {
    return false
  }

  if ( shapeAspect.ProductDefinitional !== null ) {
    return false
  }

  return true
}

// eslint-disable-next-line max-len -- needed literal CS
const ifcCartesianPoint3DString = '#171= IFCCARTESIANPOINTLIST3D(((76.,-11.4504049888,0.),(76.,-11.4504049888,15.),(76.,0.,15.),(76.,0.,0.),(86.,-11.4504049888,15.),(86.,-11.4504049888,0.),(86.,0.,15.),(86.,0.,0.)));'

const ifcCartesianPoint3DStringBuffer = new TextEncoder().encode( ifcCartesianPoint3DString )

const CARTESIAN_POINT_LIST3D_ID = 171

/**
 * Test to extract a cartesian point list, which is a nested array in STEP.
 *
 * @return {boolean} True if the test succeeds, false otherwise
 */
function extractCartesianPointList3D() {
  const bufferInput = new ParsingBuffer( ifcCartesianPoint3DStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( result !== ParseResult.COMPLETE ) {
    return false
  }

  if ( model === void 0 ) {
    return false
  }

  const cartesianPointList3D = model.getElementByExpressID( CARTESIAN_POINT_LIST3D_ID )

  if (!(cartesianPointList3D instanceof IfcCartesianPointList3D)) {
    return false
  }

  // These aren't magic numbers, they match the above and this is an expected
  // equality test.
  /* eslint-disable no-magic-numbers */
  if ( cartesianPointList3D.CoordList.length !== 8 ) {
    return false
  }

  const equalArrays =
  ( a: number[], b: number[] ) =>
    a.length === b.length &&
    a.every( ( value, index ) => value === b[index] )

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

  /* eslint-enable no-magic-numbers */

  return true
}

// This test won't run in a browser where this isn't supported - CS
/* eslint-disable no-multi-str */
const derivedSubtextString =
'#74= IFCDIRECTION((1.,0.,0.));\
#78= IFCDIRECTION((0.,0.,1.));\
#80= IFCCARTESIANPOINT((-10.245e-1,0.973380492763,-10.245e-1));\
#82= IFCAXIS2PLACEMENT3D(#80,#78,#74);\
#83= IFCDIRECTION((0.,1.));\
#85= IFCGEOMETRICREPRESENTATIONCONTEXT($,\'Model\',3,1.0E-5,#82,#83);\
#169= IFCGEOMETRICREPRESENTATIONSUBCONTEXT(\'Body\',\'Model\',*,*,*,*,#85,$,.MODEL_VIEW.,$);'

/* eslint-enable no-multi-str */

const derivedSubtextStringBuffer = new TextEncoder().encode( derivedSubtextString )

const GEOMETRIC_SUB_REPRSENTATION_EXPRESS_ID = 169
const GEOMETRIC_REPRSENTATION_EXPRESS_ID = 85
const CARTESIAN_POINT_EXPRESS_ID = 80


/**
 * Tests derived subtexts to handle complex functions and
 * overrides.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function extractDerivedSubcontext() {
  const bufferInput = new ParsingBuffer( derivedSubtextStringBuffer )

  const model = parser.parseDataToModel( bufferInput )[ 1 ]

  if ( model === void 0 ) {
    return false
  }

  const geometricSubRepresentation =
    model.getElementByExpressID( GEOMETRIC_SUB_REPRSENTATION_EXPRESS_ID )

  if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) {
    return false
  }

  // These aren't magic numbers, they match the above and this is an expected
  // equality test.
  /* eslint-disable no-magic-numbers */

  if ( geometricSubRepresentation.CoordinateSpaceDimension !== 3 ) {
    return false
  }

  if ( geometricSubRepresentation.ParentContext.expressID !==
    GEOMETRIC_REPRSENTATION_EXPRESS_ID ) {
    return false
  }

  if ( geometricSubRepresentation.Precision !==
    geometricSubRepresentation.ParentContext.Precision ) {
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

  /* eslint-enable no-magic-numbers */

  return true
}

/**
 * Tests extracting scientific number formats.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function extractScientificNumber() {
  const bufferInput = new ParsingBuffer( derivedSubtextStringBuffer )

  const model = parser.parseDataToModel( bufferInput )[ 1 ]

  if ( model === void 0 ) {
    return false
  }

  const geometricSubRepresentation =
    model.getElementByExpressID( GEOMETRIC_SUB_REPRSENTATION_EXPRESS_ID )

  if (!(geometricSubRepresentation instanceof IfcGeometricRepresentationSubContext)) {
    return false
  }

  // These aren't magic numbers, they match the above and this is an expected
  // equality test.
  /* eslint-disable no-magic-numbers */

  if ( geometricSubRepresentation.Precision !== 1e-5 ) {
    return false
  }

  const cartesianPoint = model.getElementByExpressID( CARTESIAN_POINT_EXPRESS_ID )

  if (!(cartesianPoint instanceof IfcCartesianPoint)) {
    return false
  }

  // Note, we actually test here for interning by using the same number twice
  // in different spots and making sure they match values.
  if ( cartesianPoint.Coordinates.length !== 3 ||
    cartesianPoint.Coordinates[1] !== 0.973380492763 ||
    cartesianPoint.Coordinates[2] !== -10.245e-1 ||
    cartesianPoint.Coordinates[2] !== cartesianPoint.Coordinates[ 0 ] ) {
    return false
  }

  /* eslint-enable no-magic-numbers */

  return true
}

// This test won't run in a browser where this isn't supported - CS
/* eslint-disable no-multi-str,max-len */
const personTestString =
'#1= IFCPOSTALADDRESS(.USERDEFINED.,$,\'Address\',$,(\'Bldrs Plaza\'),$,\'The City\',$,\'0\',\'AI\');\
#5= IFCTELECOMADDRESS(.USERDEFINED.,$,\'Phone\',(\'+00 11 101 10 10\'),$,$,$,\'http://bldrs.ai\',$);\
#7= IFCPERSON($,\'Pablo\',$,$,$,$,$,(#1,#5));'

/* eslint-enable no-multi-str,max-len */

const personTestStringStringBuffer = new TextEncoder().encode( personTestString )

const PERSON_EXPRESS_ID = 7
const POSTAL_EXPRESS_ID = 1
const TELECOM_EXPRESS_ID = 5

/**
 * Test for array extraction.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function extractArraysTest() {
  const bufferInput = new ParsingBuffer( personTestStringStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ||
    ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const person = model.getElementByExpressID( PERSON_EXPRESS_ID )

  if (!(person instanceof IfcPerson)) {
    return false
  }

  // These aren't magic numbers, they match the above and this is an expected
  // equality test.
  /* eslint-disable no-magic-numbers */
  if ( person.Addresses === null ||
         person.Addresses.length !== 2 ||
         !(person.Addresses[0] instanceof IfcPostalAddress ) ||
         person.Addresses[0].expressID !== 1 ||
         !(person.Addresses[1] instanceof IfcTelecomAddress ) ||
         person.Addresses[1].expressID !== 5 ) {
    return false
  }

  const postal = model.getElementByExpressID( POSTAL_EXPRESS_ID )

  if (!(postal instanceof IfcPostalAddress)) {
    return false
  }

  if ( postal.AddressLines === null ||
        postal.AddressLines.length !== 1 ||
        postal.AddressLines[0] !== 'Bldrs Plaza' ) {
    return false
  }

  const telecom = model.getElementByExpressID( TELECOM_EXPRESS_ID )

  if (!(telecom instanceof IfcTelecomAddress)) {
    return false
  }

  if ( telecom.TelephoneNumbers === null ||
        telecom.TelephoneNumbers.length !== 1 ||
        telecom.TelephoneNumbers[0] !== '+00 11 101 10 10' ) {
    return false
  }

  /* eslint-enable no-magic-numbers */

  return true
}

/**
 * Test to extract STEP enums from IFC.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function extractEnumsTest() {
  const bufferInput = new ParsingBuffer( personTestStringStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ||
    ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const postal = model.getElementByExpressID( POSTAL_EXPRESS_ID )

  if (!(postal instanceof IfcPostalAddress)) {
    return false
  }

  if ( postal.Purpose !== IfcAddressTypeEnum.USERDEFINED ) {
    return false
  }

  const telecom = model.getElementByExpressID( TELECOM_EXPRESS_ID )

  if (!(telecom instanceof IfcTelecomAddress)) {
    return false
  }

  if ( telecom.Purpose !== IfcAddressTypeEnum.USERDEFINED ) {
    return false
  }

  return true
}

/* eslint-disable max-len */
const classificationTestString =
'#314= IFCCLASSIFICATION(\'SP - GK\\X2\\00FC\\X0\\r\',\'2.0\',\'2022-02-28\',\'BLDRS\',\'Klassifizirunssystem f\\X2\\00FC\\X0\\r BLDRS Logo\',\'SP - GK\',$);'
/* eslint-enable max-len */


const classificationTestStringBuffer = new TextEncoder().encode( classificationTestString )

const CLASSIFICATION_EXPRESS_ID = 314

/**
 * Test extracting a more complicated string with an unicode escape sequence.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function extractStringTest() {
  const bufferInput = new ParsingBuffer( classificationTestStringBuffer )

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ||
    ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const classification = model.getElementByExpressID( CLASSIFICATION_EXPRESS_ID )

  if (!(classification instanceof IfcClassification )) {
    return false
  }

  if ( classification.Source !== 'SP - GK\u00FCr' ) {
    return false
  }

  return true
}

/**
 * Test the type indexing in the model.
 *
 * @return {boolean} True if the test passes, false otherwise.
 */
function indexTypeTest() {
  const bufferInput = new ParsingBuffer( indexIfcBuffer )
  const result0 = parser.parseHeader( bufferInput )[1]

  if ( result0 !== ParseResult.COMPLETE ) {
    return false
  }

  const [result, model] = parser.parseDataToModel( bufferInput )

  if ( model === void 0 ||
    ( result !== ParseResult.COMPLETE && result !== ParseResult.INCOMPLETE ) ) {
    return false
  }

  const pointListsAndPeople = model.types( IfcCartesianPointList, IfcPerson )
  const entities = Array.from( pointListsAndPeople )

  // These aren't magic numbers, they match the above and this is an expected
  // equality test.
  /* eslint-disable no-magic-numbers */
  return entities.every(
      (entity) =>
        entity instanceof IfcCartesianPointList3D ||
        entity instanceof IfcPerson ) && entities.length === 8
  /* eslint-enable no-magic-numbers */
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
