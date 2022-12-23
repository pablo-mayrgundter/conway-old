
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectTypeEnum from "./IfcObjectTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproxy.htm
 */
export default class IfcProxy implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProxy';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProxySpecification = IfcProxySpecification.instance;

    constructor( public readonly ProxyType : IfcObjectTypeEnum , public readonly Tag : IfcLabel  | undefined ) {}
}

export class IfcProxySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProxy';

    public readonly required: ReadonlyArray< string > = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProxyType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum'
		}, 
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProxySpecification = new IfcProxySpecification();
}
