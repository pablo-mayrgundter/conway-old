
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcFace from "./IfcFace.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectedfaceset.htm
 */
export default class IfcConnectedFaceSet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectedFaceSet';

    public readonly __version__: number = 0;

    constructor( public readonly CfsFaces : Array<IfcFace>  ) {}
}

export class IfcConnectedFaceSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectedFaceSet';

    public readonly required: string[] = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'CfsFaces',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFace>'
		}
    ];
}
