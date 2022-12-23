
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrientedEdge from "./IfcOrientedEdge.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpath.htm
 */
export default class IfcPath implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPath';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPathSpecification = IfcPathSpecification.instance;

    constructor( public readonly EdgeList : Array<IfcOrientedEdge>  ) {}
}

export class IfcPathSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPath';

    public readonly required: ReadonlyArray< string > = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EdgeList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrientedEdge>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPathSpecification = new IfcPathSpecification();
}
