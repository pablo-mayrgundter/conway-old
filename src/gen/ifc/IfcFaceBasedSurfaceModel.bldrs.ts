
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConnectedFaceSet from "./IfcConnectedFaceSet.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebasedsurfacemodel.htm
 */
export default class IfcFaceBasedSurfaceModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFaceBasedSurfaceModel';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFaceBasedSurfaceModelSpecification = IfcFaceBasedSurfaceModelSpecification.instance;

    constructor( public readonly FbsmFaces : Array<IfcConnectedFaceSet>  ) {}
}

export class IfcFaceBasedSurfaceModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceBasedSurfaceModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FbsmFaces',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcConnectedFaceSet>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFaceBasedSurfaceModelSpecification = new IfcFaceBasedSurfaceModelSpecification();
}
