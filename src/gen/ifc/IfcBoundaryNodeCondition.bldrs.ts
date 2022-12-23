
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLinearStiffnessMeasure from "./IfcLinearStiffnessMeasure.bldrs"
import IfcRotationalStiffnessMeasure from "./IfcRotationalStiffnessMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm
 */
export default class IfcBoundaryNodeCondition implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundaryNodeCondition';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBoundaryNodeConditionSpecification = IfcBoundaryNodeConditionSpecification.instance;

    constructor( public readonly LinearStiffnessX : IfcLinearStiffnessMeasure  | undefined, public readonly LinearStiffnessY : IfcLinearStiffnessMeasure  | undefined, public readonly LinearStiffnessZ : IfcLinearStiffnessMeasure  | undefined, public readonly RotationalStiffnessX : IfcRotationalStiffnessMeasure  | undefined, public readonly RotationalStiffnessY : IfcRotationalStiffnessMeasure  | undefined, public readonly RotationalStiffnessZ : IfcRotationalStiffnessMeasure  | undefined ) {}
}

export class IfcBoundaryNodeConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryNodeCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LinearStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'LinearStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'LinearStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}, 
		{
			name: 'RotationalStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundaryNodeConditionSpecification = new IfcBoundaryNodeConditionSpecification();
}
