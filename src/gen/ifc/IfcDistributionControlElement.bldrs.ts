
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcRelFlowControlElements from "./IfcRelFlowControlElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelement.htm
 */
export default class IfcDistributionControlElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionControlElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionControlElementSpecification = IfcDistributionControlElementSpecification.instance;

    constructor( public readonly ControlElementId : IfcIdentifier  | undefined ) {}
}

export class IfcDistributionControlElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionControlElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ControlElementId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionControlElementSpecification = new IfcDistributionControlElementSpecification();
}
