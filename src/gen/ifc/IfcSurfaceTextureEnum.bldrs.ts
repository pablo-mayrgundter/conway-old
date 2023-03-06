enum IfcSurfaceTextureEnum {
    BUMP = 0,
    OPACITY = 1,
    REFLECTION = 2,
    SELFILLUMINATION = 3,
    SHININESS = 4,
    SPECULAR = 5,
    TEXTURE = 6,
    TRANSPARENCYMAP = 7,
    NOTDEFINED = 8,
}
export default IfcSurfaceTextureEnum;

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcSurfaceTextureEnum = new Int32Array( [6,0,2] );

let prefixSumAddressIfcSurfaceTextureEnum = new Uint32Array( [0,9,21,32,44,50,60,78,95,104] );

let slotMapIfcSurfaceTextureEnum = new Int32Array( [6,8,4,2,0,5,3,7,1] );

let encodedDataIfcSurfaceTextureEnum = (new TextEncoder()).encode( ".TEXTURE..NOTDEFINED..SHININESS..REFLECTION..BUMP..SPECULAR..SELFILLUMINATION..TRANSPARENCYMAP..OPACITY." );

let IfcSurfaceTextureEnumSearch = new MinimalPerfectHash< IfcSurfaceTextureEnum >( gMapIfcSurfaceTextureEnum, prefixSumAddressIfcSurfaceTextureEnum, slotMapIfcSurfaceTextureEnum, encodedDataIfcSurfaceTextureEnum );

export { IfcSurfaceTextureEnumSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcSurfaceTextureEnumDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcSurfaceTextureEnum | undefined
{
    return parser.extract< IfcSurfaceTextureEnum >( IfcSurfaceTextureEnumSearch, input, cursor, endCursor );
}

