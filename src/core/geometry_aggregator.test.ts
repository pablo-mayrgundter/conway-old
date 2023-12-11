import fs from 'fs'
import { describe, expect, test, beforeAll } from '@jest/globals'
import { ExtractResult, IfcGeometryExtraction } from '../ifc/ifc_geometry_extraction'
import { ParseResult } from '../step/parsing/step_parser'
import IfcStepParser from '../ifc/ifc_step_parser'
import ParsingBuffer from '../parsing/parsing_buffer'
import { ConwayGeometry } from '../../dependencies/conway-geom/conway_geometry'
import GeometryAggregator from './geometry_aggregator'


let conwayModel:IfcGeometryExtraction

const conwayGeometry: ConwayGeometry = new ConwayGeometry()

/**
 *
 */
async function initializeGeometryExtractor() {
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
  const initializationStatus = await conwayGeometry.initialize()

  if (!initializationStatus) {
    return
  }

  conwayModel = new IfcGeometryExtraction(conwayGeometry, model)

  return conwayModel.isInitialized()
}

/**
 * @return {ExtractResult} indicating whether the geometry extraction was successful.
 */
function extractGeometry(): ExtractResult {
  return conwayModel.extractIFCGeometryData()[0]
}

/**
 * Test aggregating geometry with a single chunk.
 *
 * @return {boolean} True if the test succeeds.
 */
function testAggregateGeometrySingle() : boolean {

  if ( !conwayGeometry.initialized ) {
    return false
  }

  const aggregator = new GeometryAggregator(
      conwayGeometry,
      // eslint-disable-next-line no-magic-numbers
      { maxGeometrySize: 128 << 20 } )

  if ( extractGeometry() !== ExtractResult.COMPLETE ) {
    return false
  }

  aggregator.append( conwayModel.scene )

  const aggregationResult = aggregator.aggregateNative()

  return aggregationResult.chunks.length === 1
}

/**
 * Test aggregating geometry with multiple chunks.
 *
 * @return {boolean} True if the test succeeds or false otherwise.
 */
function testAggregateGeometryMultiple() : boolean {

  if ( !conwayGeometry.initialized ) {
    return false
  }

  const aggregator = new GeometryAggregator(
      conwayGeometry,
      { maxGeometrySize: 1 } )

  if ( extractGeometry() !== ExtractResult.COMPLETE ) {
    return false
  }

  aggregator.append( conwayModel.scene )

  const aggregationResult = aggregator.aggregateNative()

  return aggregationResult.chunks.length === aggregationResult.geometry.size()
}

beforeAll(async () => {

  await initializeGeometryExtractor()

})

describe('Geometry Aggregator', () => {

  test('testAggregateGeometrySingle()', () => {

    expect(testAggregateGeometrySingle()).toBe(true)

  })

  test('testAggregateGeometryMultiple()', () => {

    expect(testAggregateGeometryMultiple()).toBe(true)

  })
})
