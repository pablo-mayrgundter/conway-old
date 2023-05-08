import fs from 'fs'
import { describe, expect, test, beforeAll } from '@jest/globals'
import { ExtractResult, IfcGeometryExtraction } from './ifc_geometry_extraction'
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser'
import IfcStepParser from './ifc_step_parser'
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer'

/**
 *
 */
async function initializeGeometryExtractor() {
  await IfcGeometryExtraction.create()

  return IfcGeometryExtraction.isInitialized()
}

/**
 *  @return {boolean} indicating whether the wasm module is initialized.
 */
function isInitialized(): Boolean {
  return IfcGeometryExtraction.isInitialized()
}

/**
 * @return {ExtractResult} indicating whether the geometry extraction was successful.
 */
function extractGeometry(): ExtractResult {
  const parser = IfcStepParser.Instance
  const indexIfcBuffer: Buffer = fs.readFileSync('index.ifc')
  const bufferInput = new ParsingBuffer(indexIfcBuffer)
  const result0 = parser.parseHeader(bufferInput)[1]

  if (result0 !== ParseResult.COMPLETE) {
    return ExtractResult.INCOMPLETE
  }

  const [, model] = parser.parseDataToModel(bufferInput)

  if (model === void 0) {
    return ExtractResult.INCOMPLETE
  }

  return IfcGeometryExtraction.extractIFCGeometryData(model, true)[0]
}

/**
 * @return {number} indicating length of the geometry array
 */
function getGeometryArrayLength(): Number {
  return IfcGeometryExtraction.getGeometry().length
}

/**
 * @return {boolean} indicating if the geometry extraction module is still initialized or not
 */
function destroy(): Boolean {
  IfcGeometryExtraction.destroy()
  return IfcGeometryExtraction.isInitialized()
}

beforeAll(async () => {

  await initializeGeometryExtractor()

})

describe('Ifc Geometry Extraction', () => {

  test('initialize()', () => {

    expect(isInitialized()).toBe(true)

  })

  test('extract()', () => {

    expect(extractGeometry()).toBe(ExtractResult.COMPLETE)

  })

  test('geometryArrayLength()', () => {
    const testParameter:Number = 7
    expect(getGeometryArrayLength()).toBe(testParameter)

  })

  test('destroy()', () => {
    expect(destroy()).toBe(false)
  })

})
