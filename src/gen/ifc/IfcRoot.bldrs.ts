
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGloballyUniqueId from "./IfcGloballyUniqueId.bldrs"
import IfcOwnerHistory from "./IfcOwnerHistory.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
 */
export default class IfcRoot implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoot';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRootSpecification = IfcRootSpecification.instance;

    constructor( public readonly GlobalId : IfcGloballyUniqueId , public readonly OwnerHistory : IfcOwnerHistory , public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined ) {}
}

export class IfcRootSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoot';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'GlobalId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGloballyUniqueId'
		}, 
		{
			name: 'OwnerHistory',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOwnerHistory'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRootSpecification = new IfcRootSpecification();
}
