
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcProjectOrderTypeEnum from "./IfcProjectOrderTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectorder.htm
 */
export default class IfcProjectOrder implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProjectOrder';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProjectOrderSpecification = IfcProjectOrderSpecification.instance;

    constructor( public readonly ID : IfcIdentifier , public readonly PredefinedType : IfcProjectOrderTypeEnum , public readonly Status : IfcLabel  | undefined ) {}
}

export class IfcProjectOrderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectOrder';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectOrderTypeEnum'
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProjectOrderSpecification = new IfcProjectOrderSpecification();
}
