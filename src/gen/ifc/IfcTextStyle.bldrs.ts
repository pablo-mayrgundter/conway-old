
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcTextStyleForDefinedFont from "./IfcTextStyleForDefinedFont.bldrs"
import IfcTextStyleWithBoxCharacteristics from "./IfcTextStyleWithBoxCharacteristics.bldrs"
import IfcTextStyleTextModel from "./IfcTextStyleTextModel.bldrs"
import IfcPreDefinedTextFont from "./IfcPreDefinedTextFont.bldrs"
import IfcExternallyDefinedTextFont from "./IfcExternallyDefinedTextFont.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm
 */
export default class IfcTextStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyle';

    public readonly __version__: number = 0;

    constructor( public readonly TextCharacterAppearance : IfcTextStyleForDefinedFont  | undefined, public readonly TextStyle : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel  | undefined, public readonly TextFontStyle : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont  ) {}
}

export class IfcTextStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyle';

    public readonly required: string[] = [ 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TextCharacterAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextStyleForDefinedFont'
		}, 
		{
			name: 'TextStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel'
		}, 
		{
			name: 'TextFontStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedTextFont|IfcExternallyDefinedTextFont'
		}
    ];
}
