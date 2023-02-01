
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsymbolstyle.htm
 */
export default  class IfcSymbolStyle extends IfcPresentationStyle 
{    
    public readonly specification: IfcSymbolStyleSpecification = IfcSymbolStyleSpecification.instance;

private StyleOfSymbol_? : IfcColourSpecification|IfcPreDefinedColour

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSymbolStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSymbolStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcSymbolStyle', 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'StyleOfSymbol',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSymbolStyleSpecification = new IfcSymbolStyleSpecification();
}
