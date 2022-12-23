
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroup.htm
 */
export default class IfcRelAssignsToGroup implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToGroup';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToGroupSpecification = IfcRelAssignsToGroupSpecification.instance;

    constructor( public readonly RelatingGroup : IfcGroup  ) {}
}

export class IfcRelAssignsToGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToGroup';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGroup'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToGroupSpecification = new IfcRelAssignsToGroupSpecification();
}
