
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcResourceConsumptionEnum from "./IfcResourceConsumptionEnum.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresource.htm
 */
export default class IfcConstructionResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConstructionResource';

    public readonly __version__: number = 0;

    constructor( public readonly ResourceIdentifier : IfcIdentifier  | undefined, public readonly ResourceGroup : IfcLabel  | undefined, public readonly ResourceConsumption : IfcResourceConsumptionEnum  | undefined, public readonly BaseQuantity : IfcMeasureWithUnit  | undefined ) {}
}

export class IfcConstructionResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstructionResource';

    public readonly required: string[] = [ 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ResourceIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'ResourceGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ResourceConsumption',
			isCollection: false,
			rank: 0,
			baseType: 'IfcResourceConsumptionEnum'
		}, 
		{
			name: 'BaseQuantity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit'
		}
    ];
}
