
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNullStyle from "./IfcNullStyle.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcSymbolStyle from "./IfcSymbolStyle.bldrs"
import IfcFillAreaStyle from "./IfcFillAreaStyle.bldrs"
import IfcTextStyle from "./IfcTextStyle.bldrs"
import IfcSurfaceStyle from "./IfcSurfaceStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerwithstyle.htm
 */
export default  class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment 
{    
    public readonly specification: IfcPresentationLayerWithStyleSpecification = IfcPresentationLayerWithStyleSpecification.instance;

private LayerOn_? : boolean
    private LayerFrozen_? : boolean
    private LayerBlocked_? : boolean
    private LayerStyles_? : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPresentationLayerWithStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationLayerWithStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcPresentationLayerWithStyle', 'IfcPresentationLayerAssignment' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LayerOn',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'LayerFrozen',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'LayerBlocked',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'LayerStyles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPresentationLayerWithStyleSpecification = new IfcPresentationLayerWithStyleSpecification();
}
