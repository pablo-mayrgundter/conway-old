import fs from 'fs'
import { describe, expect, test, beforeAll } from '@jest/globals'
import { ExtractResult, IfcGeometryExtraction } from "./ifc_geometry_extraction"
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import IfcStepParser from './ifc_step_parser'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'

let ifcGeometryExtraction: IfcGeometryExtraction

async function initializeGeometryExtractor() {
  ifcGeometryExtraction = new IfcGeometryExtraction()

  await ifcGeometryExtraction.initialize()

  return ifcGeometryExtraction.isInitialized()
}

function isInitialized(): Boolean {
  return ifcGeometryExtraction.isInitialized()
}

function extractGeometry(): ExtractResult {
  let parser = IfcStepParser.Instance
  let indexIfcBuffer: Buffer = fs.readFileSync('index.ifc')
  let bufferInput = new ParsingBuffer(indexIfcBuffer)
  let result0 = parser.parseHeader(bufferInput)[1]

  if (result0 !== ParseResult.COMPLETE) {
    return ExtractResult.INCOMPLETE
  }

  let [result, model] = parser.parseDataToModel(bufferInput)

  if (model === void 0) {
    return ExtractResult.INCOMPLETE
  }

  return ifcGeometryExtraction.extractIFCGeometryData(model, true)
}

function getGeometryArrayLength(): Number {
  return ifcGeometryExtraction.getGeometry().length
}

function destroy(): Boolean {
  ifcGeometryExtraction.destroy();
  return ifcGeometryExtraction.isInitialized();
}

beforeAll(async () => {

  await initializeGeometryExtractor()

})

describe("Ifc Geometry Extraction", () => {

  test("initialize()", () => {

    expect(isInitialized()).toBe(true)

  })

  test("extract()", () => {

    expect(extractGeometry()).toBe(ExtractResult.COMPLETE)

  })

  test("geometryArrayLength()", () => {

    expect(getGeometryArrayLength()).toBe(7)

  })

  test("destroy()", () => {
    expect(destroy()).toBe(false);
  })

})