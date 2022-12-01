
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgb.htm
 */
export default class IfcColourRgb implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcColourRgb';

    public readonly __version__: number = 0;

	Red : IfcNormalisedRatioMeasure;
	Green : IfcNormalisedRatioMeasure;
	Blue : IfcNormalisedRatioMeasure;

}

export class IfcColourRgbSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColourRgb';

    public readonly required: string[] = [ 'IfcColourSpecification' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Red',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'Green',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'Blue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}
    ];
}
