
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"
import IfcObjectTypeEnum from "./IfcObjectTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassigns.htm
 */
export default class IfcRelAssigns implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssigns';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsSpecification = IfcRelAssignsSpecification.instance;

    constructor( public readonly RelatedObjects : Array<IfcObjectDefinition> , public readonly RelatedObjectsType : IfcObjectTypeEnum  | undefined ) {}
}

export class IfcRelAssignsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssigns';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObjectDefinition>'
		}, 
		{
			name: 'RelatedObjectsType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsSpecification = new IfcRelAssignsSpecification();
}
