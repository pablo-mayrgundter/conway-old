
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.bldrs"
import {IfcLuminousIntensityDistributionMeasure} from "./IfcLuminousIntensityDistributionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm
 */
export default class IfcLightDistributionData implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightDistributionData';

    public readonly __version__: number = 0;

	MainPlaneAngle : IfcPlaneAngleMeasure;
	SecondaryPlaneAngle : Array<IfcPlaneAngleMeasure>;
	LuminousIntensity : Array<IfcLuminousIntensityDistributionMeasure>;

}

export class IfcLightDistributionDataSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightDistributionData';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MainPlaneAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'SecondaryPlaneAngle',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPlaneAngleMeasure>'
		}, 
		{
			name: 'LuminousIntensity',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLuminousIntensityDistributionMeasure>'
		}
    ];
}
