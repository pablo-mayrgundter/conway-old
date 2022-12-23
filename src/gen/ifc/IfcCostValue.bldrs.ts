
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostvalue.htm
 */
export default class IfcCostValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCostValue';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCostValueSpecification = IfcCostValueSpecification.instance;

    constructor( public readonly CostType : IfcLabel , public readonly Condition : IfcText  | undefined ) {}
}

export class IfcCostValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcAppliedValue' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CostType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Condition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCostValueSpecification = new IfcCostValueSpecification();
}
