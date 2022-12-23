
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
 */
export default class IfcWindowLiningProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWindowLiningProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWindowLiningPropertiesSpecification = IfcWindowLiningPropertiesSpecification.instance;

    constructor( public readonly LiningDepth : IfcPositiveLengthMeasure  | undefined, public readonly LiningThickness : IfcPositiveLengthMeasure  | undefined, public readonly TransomThickness : IfcPositiveLengthMeasure  | undefined, public readonly MullionThickness : IfcPositiveLengthMeasure  | undefined, public readonly FirstTransomOffset : IfcNormalisedRatioMeasure  | undefined, public readonly SecondTransomOffset : IfcNormalisedRatioMeasure  | undefined, public readonly FirstMullionOffset : IfcNormalisedRatioMeasure  | undefined, public readonly SecondMullionOffset : IfcNormalisedRatioMeasure  | undefined, public readonly ShapeAspectStyle : IfcShapeAspect  | undefined ) {}
}

export class IfcWindowLiningPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowLiningProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LiningDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'LiningThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TransomThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MullionThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'FirstTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SecondTransomOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'FirstMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'SecondMullionOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'ShapeAspectStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWindowLiningPropertiesSpecification = new IfcWindowLiningPropertiesSpecification();
}
