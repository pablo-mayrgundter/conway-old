
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEdge from "./IfcEdge.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubedge.htm
 */
export default class IfcSubedge implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSubedge';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSubedgeSpecification = IfcSubedgeSpecification.instance;

    constructor( public readonly ParentEdge : IfcEdge  ) {}
}

export class IfcSubedgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSubedge';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ParentEdge',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEdge'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSubedgeSpecification = new IfcSubedgeSpecification();
}
