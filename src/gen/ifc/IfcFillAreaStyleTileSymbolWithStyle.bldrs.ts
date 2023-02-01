
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletilesymbolwithstyle.htm
 */
export default  class IfcFillAreaStyleTileSymbolWithStyle extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcFillAreaStyleTileSymbolWithStyleSpecification = IfcFillAreaStyleTileSymbolWithStyleSpecification.instance;

private Symbol_? : IfcAnnotationSymbolOccurrence

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFillAreaStyleTileSymbolWithStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleTileSymbolWithStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcFillAreaStyleTileSymbolWithStyle', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Symbol',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnnotationSymbolOccurrence',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleTileSymbolWithStyleSpecification = new IfcFillAreaStyleTileSymbolWithStyleSpecification();
}
