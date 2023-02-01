
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcFillAreaStyleTileSymbolWithStyle from "./IfcFillAreaStyleTileSymbolWithStyle.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletiles.htm
 */
export default  class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcFillAreaStyleTilesSpecification = IfcFillAreaStyleTilesSpecification.instance;

private TilingPattern_? : IfcOneDirectionRepeatFactor
    private Tiles_? : Array<IfcFillAreaStyleTileSymbolWithStyle>
    private TilingScale_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFillAreaStyleTilesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleTiles';

    public readonly required: ReadonlyArray< string > = [ 'IfcFillAreaStyleTiles', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TilingPattern',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOneDirectionRepeatFactor',
			optional: false
		}, 
		{
			name: 'Tiles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcFillAreaStyleTileSymbolWithStyle>',
			optional: false
		}, 
		{
			name: 'TilingScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleTilesSpecification = new IfcFillAreaStyleTilesSpecification();
}
