
import Component from "../../core/component"
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
export default  class IfcFillAreaStyle extends IfcPresentationStyle 
{    
    public readonly specification: IfcFillAreaStyleSpecification = IfcFillAreaStyleSpecification.instance;

private FillStyles_? : Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFillAreaStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcFillAreaStyle', 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FillStyles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFillAreaStyleHatching|IfcFillAreaStyleTiles|IfcColourSpecification|IfcPreDefinedColour|IfcExternallyDefinedHatchStyle>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleSpecification = new IfcFillAreaStyleSpecification();
}
