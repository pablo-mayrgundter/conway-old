
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
 */
export default class IfcVertexPoint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVertexPoint';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcVertexPointSpecification = IfcVertexPointSpecification.instance;

    constructor( public readonly VertexGeometry : IfcPoint  ) {}
}

export class IfcVertexPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexPoint';

    public readonly required: ReadonlyArray< string > = [ 'IfcVertex', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VertexGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVertexPointSpecification = new IfcVertexPointSpecification();
}
