
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAssemblyPlaceEnum from "./IfcAssemblyPlaceEnum.bldrs"
import IfcElementAssemblyTypeEnum from "./IfcElementAssemblyTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementassembly.htm
 */
export default class IfcElementAssembly implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementAssembly';

    public readonly __version__: number = 0;

    constructor( public readonly AssemblyPlace : IfcAssemblyPlaceEnum  | undefined, public readonly PredefinedType : IfcElementAssemblyTypeEnum  ) {}
}

export class IfcElementAssemblySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementAssembly';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'AssemblyPlace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAssemblyPlaceEnum'
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElementAssemblyTypeEnum'
		}
    ];
}
