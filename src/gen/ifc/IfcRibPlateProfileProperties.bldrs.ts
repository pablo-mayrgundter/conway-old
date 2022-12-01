
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcRibPlateDirectionEnum} from "./IfcRibPlateDirectionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcribplateprofileproperties.htm
 */
export default class IfcRibPlateProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRibPlateProfileProperties';

    public readonly __version__: number = 0;

	Thickness? : IfcPositiveLengthMeasure;
	RibHeight? : IfcPositiveLengthMeasure;
	RibWidth? : IfcPositiveLengthMeasure;
	RibSpacing? : IfcPositiveLengthMeasure;
	Direction : IfcRibPlateDirectionEnum;

}

export class IfcRibPlateProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRibPlateProfileProperties';

    public readonly required: string[] = [ 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'RibHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'RibWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'RibSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Direction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRibPlateDirectionEnum'
		}
    ];
}
