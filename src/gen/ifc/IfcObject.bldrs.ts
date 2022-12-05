
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRelDefines from "./IfcRelDefines.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobject.htm
 */
export default class IfcObject implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcObject';

    public readonly __version__: number = 0;

    constructor( public readonly ObjectType : IfcLabel  | undefined ) {}
}

export class IfcObjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObject';

    public readonly required: string[] = [ 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ObjectType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
