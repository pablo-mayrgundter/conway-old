import {describe, expect, test, beforeAll} from '@jest/globals';
import { IfcGeometryExtraction } from "./ifc_geometry_extraction";
import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import { ParamsPolygonalFaceSet } from "../../../dependencies/conway-geom/conway_geometry";
import IfcStepParser from './ifc_step_parser';
import { IfcPolygonalFaceSet, IfcIndexedPolygonalFace } from '../../gen/ifc';

let ifcGeometryExtraction: IfcGeometryExtraction;

async function initializeGeometryExtractor()
{
    ifcGeometryExtraction = new IfcGeometryExtraction();

    await ifcGeometryExtraction.initialize();

    return ifcGeometryExtraction.isInitialized();
}

function isInitialized() : Boolean
{
  return ifcGeometryExtraction.isInitialized();
}

function extractGeometry() : ParseResult
{
  return ifcGeometryExtraction.extractIFCGeometryData(true);
}

function getGeometryArrayLength() : Number
{
  return ifcGeometryExtraction.getGeometry().length;
}

beforeAll( async () => {

  await initializeGeometryExtractor();

});

describe( "Ifc Geometry Extraction", () => {

  test("initialize()", () =>  { 

        expect(isInitialized()).toBe(true);

    })

    test("extract()", () =>  { 

      expect(extractGeometry()).toBe(ParseResult.COMPLETE);

    })

    test("geometryArrayLength()", () =>  { 

      expect(getGeometryArrayLength()).toBe(7);

    })
  
});