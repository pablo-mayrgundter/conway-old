
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFillAreaStyleHatching from "./IfcFillAreaStyleHatching.bldrs"
import IfcFillAreaStyleTiles from "./IfcFillAreaStyleTiles.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"
import IfcExternallyDefinedHatchStyle from "./IfcExternallyDefinedHatchStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyle.htm
 */
export default class IfcFillAreaStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFillAreaStyle';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFillAreaStyleSpecification = IfcFillAreaStyleSpecification.instance;

    constructor( public readonly FillStyles : Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>  ) {}
}

export class IfcFillAreaStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FillStyles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleSpecification = new IfcFillAreaStyleSpecification();
}
