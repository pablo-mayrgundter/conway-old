
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationItem from "./IfcClassificationItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationitemrelationship.htm
 */
export default class IfcClassificationItemRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationItemRelationship';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationItemRelationshipSpecification = IfcClassificationItemRelationshipSpecification.instance;

    constructor( public readonly RelatingItem : IfcClassificationItem , public readonly RelatedItems : Array<IfcClassificationItem>  ) {}
}

export class IfcClassificationItemRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationItemRelationship';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingItem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationItem'
		}, 
		{
			name: 'RelatedItems',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationItem>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationItemRelationshipSpecification = new IfcClassificationItemRelationshipSpecification();
}
