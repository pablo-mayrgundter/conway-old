
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcTableRow from "./IfcTableRow.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm
 */
export default class IfcTable implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTable';

    public readonly __version__: number = 0;

    constructor( public readonly Name : string , public readonly Rows : Array<IfcTableRow>  ) {}
}

export class IfcTableSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTable';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'string'
		}, 
		{
			name: 'Rows',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTableRow>'
		}
    ];
}
