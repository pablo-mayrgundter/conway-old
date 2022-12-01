
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastener.htm
 */
export default class IfcMechanicalFastener implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalFastener';

    public readonly __version__: number = 0;

	NominalDiameter? : IfcPositiveLengthMeasure;
	NominalLength? : IfcPositiveLengthMeasure;

}

export class IfcMechanicalFastenerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalFastener';

    public readonly required: string[] = [ 'IfcFastener', 'IfcElementComponent', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'NominalLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
