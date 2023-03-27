enum IfcBSplineSurfaceForm {
    PLANE_SURF = 0,
    CYLINDRICAL_SURF = 1,
    CONICAL_SURF = 2,
    SPHERICAL_SURF = 3,
    TOROIDAL_SURF = 4,
    SURF_OF_REVOLUTION = 5,
    RULED_SURF = 6,
    GENERALISED_CONE = 7,
    QUADRIC_SURF = 8,
    SURF_OF_LINEAR_EXTRUSION = 9,
    UNSPECIFIED = 10,
}
export { IfcBSplineSurfaceForm };

import MinimalPerfectHash from '../../../dependencies/conway-ds/src/indexing/minimal_perfect_hash';

let gMapIfcBSplineSurfaceForm = new Int32Array( [7,120,17] );

let prefixSumAddressIfcBSplineSurfaceForm = new Uint32Array( [0,18,34,48,60,86,106,120,132,150,165,178] );

let slotMapIfcBSplineSurfaceForm = new Int32Array( [7,3,2,0,9,5,8,6,1,4,10] );

let encodedDataIfcBSplineSurfaceForm = (new TextEncoder()).encode( ".GENERALISED_CONE..SPHERICAL_SURF..CONICAL_SURF..PLANE_SURF..SURF_OF_LINEAR_EXTRUSION..SURF_OF_REVOLUTION..QUADRIC_SURF..RULED_SURF..CYLINDRICAL_SURF..TOROIDAL_SURF..UNSPECIFIED." );

let IfcBSplineSurfaceFormSearch = new MinimalPerfectHash< IfcBSplineSurfaceForm >( gMapIfcBSplineSurfaceForm, prefixSumAddressIfcBSplineSurfaceForm, slotMapIfcBSplineSurfaceForm, encodedDataIfcBSplineSurfaceForm );

export { IfcBSplineSurfaceFormSearch };



import StepEnumParser from '../../../dependencies/conway-ds/src/parsing/step/step_enum_parser';

const parser = StepEnumParser.Instance;

export function IfcBSplineSurfaceFormDeserializeStep( input: Uint8Array, cursor: number, endCursor: number ): IfcBSplineSurfaceForm | undefined
{
    return parser.extract< IfcBSplineSurfaceForm >( IfcBSplineSurfaceFormSearch, input, cursor, endCursor );
}
