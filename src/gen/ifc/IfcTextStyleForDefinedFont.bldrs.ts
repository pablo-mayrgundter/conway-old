
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm
 */
export default class IfcTextStyleForDefinedFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyleForDefinedFont';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTextStyleForDefinedFontSpecification = IfcTextStyleForDefinedFontSpecification.instance;

    constructor( public readonly Colour : IfcColourSpecification|IfcPreDefinedColour , public readonly BackgroundColour : IfcColourSpecification|IfcPreDefinedColour  | undefined ) {}
}

export class IfcTextStyleForDefinedFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleForDefinedFont';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleForDefinedFontSpecification = new IfcTextStyleForDefinedFontSpecification();
}
