
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm
 */
export default class IfcSlippageConnectionCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSlippageConnectionCondition';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSlippageConnectionConditionSpecification = IfcSlippageConnectionConditionSpecification.instance;

    constructor( public readonly SlippageX : IfcLengthMeasure  | undefined, public readonly SlippageY : IfcLengthMeasure  | undefined, public readonly SlippageZ : IfcLengthMeasure  | undefined ) {}
}

export class IfcSlippageConnectionConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlippageConnectionCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralConnectionCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SlippageX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SlippageY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'SlippageZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSlippageConnectionConditionSpecification = new IfcSlippageConnectionConditionSpecification();
}
