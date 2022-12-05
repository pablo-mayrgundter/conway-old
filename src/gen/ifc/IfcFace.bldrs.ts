
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcFaceBound from "./IfcFaceBound.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm
 */
export default class IfcFace implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFace';

    public readonly __version__: number = 0;

    constructor( public readonly Bounds : Array<IfcFaceBound>  ) {}
}

export class IfcFaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFace';

    public readonly required: string[] = [ 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Bounds',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFaceBound>'
		}
    ];
}
