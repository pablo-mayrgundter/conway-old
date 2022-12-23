
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementarysurface.htm
 */
export default class IfcElementarySurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementarySurface';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementarySurfaceSpecification = IfcElementarySurfaceSpecification.instance;

    constructor( public readonly Position : IfcAxis2Placement3D  ) {}
}

export class IfcElementarySurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementarySurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementarySurfaceSpecification = new IfcElementarySurfaceSpecification();
}
