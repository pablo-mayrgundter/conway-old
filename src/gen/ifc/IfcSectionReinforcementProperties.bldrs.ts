
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcReinforcingBarRoleEnum from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcSectionProperties from "./IfcSectionProperties.bldrs"
import IfcReinforcementBarProperties from "./IfcReinforcementBarProperties.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionreinforcementproperties.htm
 */
export default class IfcSectionReinforcementProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSectionReinforcementProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSectionReinforcementPropertiesSpecification = IfcSectionReinforcementPropertiesSpecification.instance;

    constructor( public readonly LongitudinalStartPosition : IfcLengthMeasure , public readonly LongitudinalEndPosition : IfcLengthMeasure , public readonly TransversePosition : IfcLengthMeasure  | undefined, public readonly ReinforcementRole : IfcReinforcingBarRoleEnum , public readonly SectionDefinition : IfcSectionProperties , public readonly CrossSectionReinforcementDefinitions : Array<IfcReinforcementBarProperties>  ) {}
}

export class IfcSectionReinforcementPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSectionReinforcementProperties';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LongitudinalStartPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'LongitudinalEndPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'TransversePosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'ReinforcementRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarRoleEnum'
		}, 
		{
			name: 'SectionDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSectionProperties'
		}, 
		{
			name: 'CrossSectionReinforcementDefinitions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcReinforcementBarProperties>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSectionReinforcementPropertiesSpecification = new IfcSectionReinforcementPropertiesSpecification();
}
