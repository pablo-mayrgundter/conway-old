import {describe, expect, test} from '@jest/globals';
import { IfcGeometryExtraction } from "./ifc_geometry_extraction";
import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import { ParamsPolygonalFaceSet } from "../../../dependencies/conway-geom/conway_geometry";
import IfcStepParser from './ifc_step_parser';
import { IfcPolygonalFaceSet, IfcIndexedPolygonalFace } from '../../gen/ifc';

let parser = IfcStepParser.Instance;
let indexIfcBuffer = fs.readFileSync( 'index.ifc' );

let ifcGeometryExtraction: IfcGeometryExtraction;

function extractIFCGeometryData()
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

    if ( entities.length !== 287 )
    {
        return;
    }

    for (const entity of entities)
    {
        if (entity instanceof IfcPolygonalFaceSet)
        {
            //map points 
            const points = entity.Coordinates.CoordList.map(([x, y, z]) => ({ x, y, z }));

            //map indices 
            const faces = entity.Faces.values();

            let indicesPerFace: number = -1;

            if ( entity.Faces.at(0) != undefined )
            {
                indicesPerFace = entity.Faces.at(0)!.CoordIndex.length;
            }

            const indices = Array.from(faces, (face) => face.CoordIndex).flat();

            /*const parameters: ParamsPolygonalFaceSet = {
                numPoints: points.length,
                numIndices: indices.length,
                indicesPerFace: indicesPerFace,
                indexedPolygonalFaceWithVoids: false,
                points: points,
                indices: indices,
              };


            const geometry = ifcGeometryExtraction.getGeometry(parameters);

            const vertexData = geometry.GetVertexData();
            const vertexDataSize = geometry.GetVertexDataSize();
            const indexData = geometry.GetIndexData();
            const indexDataSize = geometry.GetIndexDataSize();

            console.log("Vertex Data Size: " + vertexDataSize);
            console.log("Index Data Size: " + indexDataSize);*/

        }
    }

    return result;
}

async function initializeGeometryExtractor()
{
     ifcGeometryExtraction = new IfcGeometryExtraction();

    console.log("Initializing...");
    await ifcGeometryExtraction.initialize();

    return ifcGeometryExtraction.isInitialized();
}

describe("Ifc Geometry Extraction", async () => {
  await initializeGeometryExtractor();

  test("Ifc Geometry Extraction Initialization", () =>  { 
        expect(ifcGeometryExtraction.isInitialized()).toBe(true);
        extractIFCGeometryData();
    })
  

  //test("getGeometry returns valid geometry", async () => {
    /*ifcGeometryExtraction = new IfcGeometryExtraction();
    const params = {
      numPoints: 3,
      numIndices: 3,
      indicesPerFace: 3,
      indexedPolygonalFaceWithVoids: false,
      points: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 },
        { x: 1, y: 0, z: 0 },
      ],
      indices: [0, 1, 2],
    };

    const geometry = ifcGeometryExtraction.getGeometry(params);

    const vertexData = geometry.GetVertexData();
    const vertexDataSize = geometry.GetVertexDataSize();
    const indexData = geometry.GetIndexData();
    const indexDataSize = geometry.GetIndexDataSize();

    expect(vertexDataSize).toBe(params.numPoints * 3); // Three floats per point
    expect(indexDataSize).toBe(params.numIndices);

    ifcGeometryExtraction.destroy();*/
 // });
});