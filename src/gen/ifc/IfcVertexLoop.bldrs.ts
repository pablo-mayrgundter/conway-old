
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
 */
export default class IfcVertexLoop implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVertexLoop';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcVertexLoopSpecification = IfcVertexLoopSpecification.instance;

    constructor( public readonly LoopVertex : IfcVertex  ) {}
}

export class IfcVertexLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexLoop';

    public readonly required: ReadonlyArray< string > = [ 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LoopVertex',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVertexLoopSpecification = new IfcVertexLoopSpecification();
}
