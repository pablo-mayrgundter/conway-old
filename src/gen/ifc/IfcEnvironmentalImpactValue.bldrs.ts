
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcEnvironmentalImpactCategoryEnum from "./IfcEnvironmentalImpactCategoryEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenvironmentalimpactvalue.htm
 */
export default class IfcEnvironmentalImpactValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEnvironmentalImpactValue';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEnvironmentalImpactValueSpecification = IfcEnvironmentalImpactValueSpecification.instance;

    constructor( public readonly ImpactType : IfcLabel , public readonly Category : IfcEnvironmentalImpactCategoryEnum , public readonly UserDefinedCategory : IfcLabel  | undefined ) {}
}

export class IfcEnvironmentalImpactValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnvironmentalImpactValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcAppliedValue' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ImpactType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Category',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEnvironmentalImpactCategoryEnum'
		}, 
		{
			name: 'UserDefinedCategory',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEnvironmentalImpactValueSpecification = new IfcEnvironmentalImpactValueSpecification();
}
