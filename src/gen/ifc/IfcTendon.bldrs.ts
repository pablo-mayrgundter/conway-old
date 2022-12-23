
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTendonTypeEnum from "./IfcTendonTypeEnum.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendon.htm
 */
export default class IfcTendon implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTendon';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTendonSpecification = IfcTendonSpecification.instance;

    constructor( public readonly PredefinedType : IfcTendonTypeEnum , public readonly NominalDiameter : IfcPositiveLengthMeasure , public readonly CrossSectionArea : IfcAreaMeasure , public readonly TensionForce : IfcForceMeasure  | undefined, public readonly PreStress : IfcPressureMeasure  | undefined, public readonly FrictionCoefficient : IfcNormalisedRatioMeasure  | undefined, public readonly AnchorageSlip : IfcPositiveLengthMeasure  | undefined, public readonly MinCurvatureRadius : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcTendonSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTendon';

    public readonly required: ReadonlyArray< string > = [ 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTendonTypeEnum'
		}, 
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'TensionForce',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'PreStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'FrictionCoefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'AnchorageSlip',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MinCurvatureRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTendonSpecification = new IfcTendonSpecification();
}
