
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm
 */
export default  class IfcTextStyleForDefinedFont extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTextStyleForDefinedFontSpecification = IfcTextStyleForDefinedFontSpecification.instance;

private Colour_? : IfcColourSpecification|IfcPreDefinedColour
    private BackgroundColour_? : IfcColourSpecification|IfcPreDefinedColour

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextStyleForDefinedFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleForDefinedFont';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextStyleForDefinedFont' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Colour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour',
			optional: false
		}, 
		{
			name: 'BackgroundColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleForDefinedFontSpecification = new IfcTextStyleForDefinedFontSpecification();
}
