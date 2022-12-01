
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcColourSpecification} from "./IfcColourSpecification.bldrs"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm
 */
export default class IfcTextStyleForDefinedFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyleForDefinedFont';

    public readonly __version__: number = 0;

	Colour : IfcColourSpecification|IfcPreDefinedColour;
	BackgroundColour? : IfcColourSpecification|IfcPreDefinedColour;

}

export class IfcTextStyleForDefinedFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleForDefinedFont';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Colour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour'
		}, 
		{
			name: 'BackgroundColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour'
		}
    ];
}
