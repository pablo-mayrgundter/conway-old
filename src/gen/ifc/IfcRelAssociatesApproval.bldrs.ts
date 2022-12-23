
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcApproval from "./IfcApproval.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesapproval.htm
 */
export default class IfcRelAssociatesApproval implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesApproval';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesApprovalSpecification = IfcRelAssociatesApprovalSpecification.instance;

    constructor( public readonly RelatingApproval : IfcApproval  ) {}
}

export class IfcRelAssociatesApprovalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesApproval';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesApprovalSpecification = new IfcRelAssociatesApprovalSpecification();
}
