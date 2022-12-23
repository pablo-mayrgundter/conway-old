
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
 */
export default class IfcSweptDiskSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSweptDiskSolid';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSweptDiskSolidSpecification = IfcSweptDiskSolidSpecification.instance;

    constructor( public readonly Directrix : IfcCurve , public readonly Radius : IfcPositiveLengthMeasure , public readonly InnerRadius : IfcPositiveLengthMeasure  | undefined, public readonly StartParam : IfcParameterValue , public readonly EndParam : IfcParameterValue  ) {}
}

export class IfcSweptDiskSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptDiskSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Directrix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'InnerRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'StartParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'EndParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSweptDiskSolidSpecification = new IfcSweptDiskSolidSpecification();
}
