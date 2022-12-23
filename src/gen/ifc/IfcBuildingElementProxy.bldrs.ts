
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElementCompositionEnum from "./IfcElementCompositionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementproxy.htm
 */
export default class IfcBuildingElementProxy implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingElementProxy';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBuildingElementProxySpecification = IfcBuildingElementProxySpecification.instance;

    constructor( public readonly CompositionType : IfcElementCompositionEnum  | undefined ) {}
}

export class IfcBuildingElementProxySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementProxy';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CompositionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElementCompositionEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementProxySpecification = new IfcBuildingElementProxySpecification();
}
