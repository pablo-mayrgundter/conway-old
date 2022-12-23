
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLightDistributionCurveEnum from "./IfcLightDistributionCurveEnum.bldrs"
import IfcLightDistributionData from "./IfcLightDistributionData.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightintensitydistribution.htm
 */
export default class IfcLightIntensityDistribution implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightIntensityDistribution';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcLightIntensityDistributionSpecification = IfcLightIntensityDistributionSpecification.instance;

    constructor( public readonly LightDistributionCurve : IfcLightDistributionCurveEnum , public readonly DistributionData : Array<IfcLightDistributionData>  ) {}
}

export class IfcLightIntensityDistributionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightIntensityDistribution';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LightDistributionCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLightDistributionCurveEnum'
		}, 
		{
			name: 'DistributionData',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLightDistributionData>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightIntensityDistributionSpecification = new IfcLightIntensityDistributionSpecification();
}
