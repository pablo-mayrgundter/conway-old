

import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject } from "../../../dependencies/conway-geom/conway_geometry";
import IfcStepParser from './ifc_step_parser';
import { IfcPolygonalFaceSet, IfcIndexedPolygonalFace } from '../../gen/ifc';

type GlmVec3Array = any;
type UintVector   = any;



export class IfcGeometryExtraction {
    private conwayGeom: ConwayGeometry;
    private parser = IfcStepParser.Instance;
    private indexIfcBuffer: Buffer;

    private geometryArray:GeometryObject[];

    constructor(optionalPath?: string) {
        this.conwayGeom = new ConwayGeometry();
        this.geometryArray = [];

        if (optionalPath)
        {
            this.indexIfcBuffer = fs.readFileSync( optionalPath );
        } 
        else 
        {
            this.indexIfcBuffer = fs.readFileSync( 'index.ifc' );
        }
    }

    async initialize() {
        await this.conwayGeom.initialize();
        console.log("Testing...");
    }

    getGeometry() : GeometryObject[] {
        return this.geometryArray;
    }

    getWasmModule() : any {
        return this.conwayGeom.wasmModule;
    }

    isInitialized() : Boolean {
        return this.conwayGeom.initialized;
    }

    getModelId(): Number {
        if (this.isInitialized())
        {
            return this.conwayGeom.modelId;
        } else 
        {
            return -1;
        }
    }

    addGeometry(geometry: GeometryObject) {
        this.geometryArray.push(geometry);
    }

    myTestFunction(param: any) : any {
        return this.conwayGeom.myTestFunction(param);
    }

    toObj(geometry:GeometryObject): string {
        return this.conwayGeom.toObj(geometry);
    }

    destroy() {
        this.conwayGeom.destroy();
    }

    printGeometryInfo(geometry: GeometryObject) {
        const vertexDataPtr = geometry.GetVertexData();
        const vertexDataSize = geometry.GetVertexDataSize();
        const indexDataPtr = geometry.GetIndexData();
        const indexDataSize = geometry.GetIndexDataSize();

        //unwrap vertex data
        const returnedVertexData = new Float32Array(this.getWasmModule().HEAPF32.buffer, vertexDataPtr, vertexDataPtr.length);

        //unwrap index data
        const returnedIndexData = new Uint32Array(this.getWasmModule().HEAPU32.buffer, indexDataPtr, indexDataPtr.length);

        console.log("VertexData Ptr: " + vertexDataPtr);
        console.log("VertexData Size: " + vertexDataSize);
        console.log("IndexData Ptr: " + indexDataPtr);
        console.log("IndexData Size: " + indexDataSize);

        // Now you can access the vertex Data array in TypeScript using the returnedVertexData object
        console.log("returnedVertexData[0]: " + returnedVertexData[0]); // prints the first element of vertexData

        // Now you can access the indexData array in TypeScript using the returnedIndexData object
        console.log("returnedIndexData[0]: " + returnedIndexData[0]); // prints the first element of indexData
    }

    extractIFCGeometryData()
    {
        let bufferInput = new ParsingBuffer( this.indexIfcBuffer );
        let result0     = this.parser.parseHeader( bufferInput )[ 1 ];

        if ( result0 !== ParseResult.COMPLETE )
        {
            return result0;
        }

        let [result, model] = this.parser.parseDataToModel( bufferInput );

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

                //initialize new native glm vec3 array object 
                const pointsArray:GlmVec3Array = new (this.getWasmModule().glmVec3Array as GlmVec3Array)();

                //TODO: get resize() working

                //populate points array 
                for (let i = 0; i < points.length; i++) {
                    pointsArray.push_back(points[i]);
                }
                
                //TODO: get resize() working
                //populate indices array 
                const indicesArray:UintVector = new (this.getWasmModule().UintVector as UintVector)();
                for (let i = 0; i < indices.length; i++)
                {
                    indicesArray.push_back(indices[i]);
                }

                const parameters: ParamsPolygonalFaceSet = {
                    numPoints: pointsArray.size(),
                    numIndices: indicesArray.size(),
                    indicesPerFace: indicesPerFace,
                    indexedPolygonalFaceWithVoids: false,
                    points: pointsArray, 
                    indices: indicesArray,
                };

                const geometry:GeometryObject = this.conwayGeom.getGeometry(parameters);

                this.addGeometry(geometry);

                //free allocated wasm vectors
                pointsArray.delete();
                indicesArray.delete();
            }
        }

        return result;
    }


}

let ifcGeometryExtraction: IfcGeometryExtraction;

async function initializeGeometryExtractor()
{
    ifcGeometryExtraction = new IfcGeometryExtraction();

    console.log("Initializing...");
    await ifcGeometryExtraction.initialize();

    return ifcGeometryExtraction.isInitialized();
}

async function testing()
{
    await initializeGeometryExtractor();
    ifcGeometryExtraction.extractIFCGeometryData();

    const geometryArray = ifcGeometryExtraction.getGeometry();

    var fullGeometry = geometryArray[0];
    for (let i = 0; i < geometryArray.length; i++)
    {
        ifcGeometryExtraction.printGeometryInfo(geometryArray[i]);

        if (i > 0)
        {
            fullGeometry.AddGeometry(geometryArray[i]);
        }
    }

    console.log("\n\nfullGeometry: ");
    ifcGeometryExtraction.printGeometryInfo(fullGeometry);

    console.log("\nWriting Obj file...");
    const objResult = ifcGeometryExtraction.toObj(fullGeometry);

    const filename = "output.obj";
    fs.writeFile(filename, objResult, function (err) {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Data written to file:", filename);
        }
      });
      
    console.log("Wrote full geometry to " + filename );
}

testing();