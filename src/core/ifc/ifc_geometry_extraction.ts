

import fs from 'fs';
import ParsingBuffer from '../../../dependencies/conway-ds/src/parsing/parsing_buffer';
import { ParseResult } from '../../../dependencies/conway-ds/src/parsing/step/step_parser';
import { ConwayGeometry, ParamsPolygonalFaceSet, GeometryObject } from "../../../dependencies/conway-geom/conway_geometry";
import IfcStepParser from './ifc_step_parser';
import { IfcPolygonalFaceSet, IfcIndexedPolygonalFace } from '../../gen/ifc';

type NativeVectorGlmVec3 = any;
type NativeUintVector   = any;



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

    async initialize() 
    {
        await this.conwayGeom.initialize();
    }

    getGeometry() : GeometryObject[] 
    {
        return this.geometryArray;
    }

    getWasmModule() : any 
    {
        return this.conwayGeom.wasmModule;
    }

    /*
    These native memory helpers should probably be in their own class ...
     */
    nativeVectorGlmVec3(initialSize?: number) : NativeVectorGlmVec3 
    {
        let nativeVectorGlmVec3_ = new (this.getWasmModule().glmVec3Array as NativeVectorGlmVec3)();

        if (initialSize)
        {
            //resize has a required second parameter to set default values if new vector size > old vector size
            nativeVectorGlmVec3_.resize(initialSize, {x:0, y:0, z:0});
        }

        return nativeVectorGlmVec3_;
    }

    /*
    These native memory helpers should probably be in their own class ...
     */
    nativeUintVector(initialize?: number) : NativeUintVector 
    {
        let nativeUintVector_ = new (this.getWasmModule().UintVector as NativeUintVector)();

        if (initialize)
        {
            //resize has a required second parameter to set default values if new vector size > old vector size
            nativeUintVector_.resize(initialize, 0);
        }

        return nativeUintVector_;
    }


    isInitialized() : Boolean 
    {
        return this.conwayGeom.initialized;
    }

    getModelId(): Number 
    {
        if (this.isInitialized())
        {
            return this.conwayGeom.modelId;
        } else 
        {
            return -1;
        }
    }

    addGeometry(geometry: GeometryObject) 
    {
        this.geometryArray.push(geometry);
    }

    myTestFunction(param: any) : any 
    {
        return this.conwayGeom.myTestFunction(param);
    }

    toObj(geometry:GeometryObject): string 
    {
        return this.conwayGeom.toObj(geometry);
    }

    destroy() 
    {
        this.conwayGeom.destroy();
    }

    printGeometryInfo(geometry: GeometryObject) 
    {
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

    extractIFCGeometryData(logTime:boolean = false) : ParseResult
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
            return ParseResult.INCOMPLETE;
        }

        let entities = Array.from( model );

        if ( entities.length !== 287 )
        {
            return ParseResult.INCOMPLETE;
        }

        const startTime = process.hrtime();
        for (const entity of entities)
        {
            if (entity instanceof IfcPolygonalFaceSet)
            {
                //map points 
                const points = entity.Coordinates.CoordList.map(([x, y, z]) => ({ x, y, z }));

                //map indices 
                const faces = entity.Faces.values();

                let indicesPerFace: number = -1;

                //if the first Face is valid, we can set the indicesPerFace here. 
                if ( entity.Faces.at(0) != undefined )
                {
                    indicesPerFace = entity.Faces.at(0)!.CoordIndex.length;
                } 
                else
                {
                    result = ParseResult.INCOMPLETE;
                    continue;
                }

                const indices = Array.from(faces, (face) => face.CoordIndex).flat();            

                //initialize new native glm::vec3 array object (free memory with delete())
                const pointsArray:NativeVectorGlmVec3 = this.nativeVectorGlmVec3(points.length);

                //populate points array 
                for (let i = 0; i < points.length; i++) 
                {
                    pointsArray.set(i, points[i]);
                }
                
                //initialize new native indices array (free memory with delete())
                const indicesArray:NativeUintVector = this.nativeUintVector(indices.length);

                for (let i = 0; i < indices.length; i++)
                {
                    indicesArray.set(i, indices[i]);
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

                //add geometry to the list of geometry objects returned by wasm module 
                this.addGeometry(geometry);

                //free allocated wasm vectors
                pointsArray.delete();
                indicesArray.delete();
            }
        }

        const endTime = process.hrtime(startTime);
        const executionTimeInMs = (endTime[0] * 1e9 + endTime[1]) / 1e6;

        if (logTime)
        {
            console.log(`Geometry Extraction took ${executionTimeInMs} milliseconds to execute.`);
        }

        return result;
    }
}

/*let ifcGeometryExtraction: IfcGeometryExtraction;

async function initializeGeometryExtractor()
{
    ifcGeometryExtraction = new IfcGeometryExtraction();

    console.log("Initializing...");
    await ifcGeometryExtraction.initialize();

    return ifcGeometryExtraction.isInitialized();
}

async function testing()
{
    //wasm module initialization happens asynchronously ... 
    await initializeGeometryExtractor();

    //parse + extract data model + geometry data
    ifcGeometryExtraction.extractIFCGeometryData();

    //get list of GeometryObjects 
    const geometryArray = ifcGeometryExtraction.getGeometry();

    console.log("Geometry Array Length: " + ifcGeometryExtraction.getGeometry().length);

    //we can assign the first GeometryObject to another variable here to combine them all.
    /*var fullGeometry = geometryArray[0];
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

    //returns a string containing a full obj
    /*const objResult = ifcGeometryExtraction.toObj(fullGeometry);

    //write to FS
    const filename = "output.obj";
    fs.writeFile(filename, objResult, function (err) {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Data written to file:", filename);
        }
      });
}

testing();*/