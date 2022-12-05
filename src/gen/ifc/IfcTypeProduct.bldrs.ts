
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeproduct.htm
 */
export default class IfcTypeProduct implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTypeProduct';

    public readonly __version__: number = 0;

    constructor( public readonly RepresentationMaps : Array<IfcRepresentationMap>  | undefined, public readonly Tag : IfcLabel  | undefined ) {}
}

export class IfcTypeProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTypeProduct';

    public readonly required: string[] = [ 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RepresentationMaps',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationMap>'
		}, 
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
