
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcInteger from "./IfcInteger.bldrs"
import IfcReal from "./IfcReal.bldrs"
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLogical from "./IfcLogical.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinategenerator.htm
 */
export default  class IfcTextureCoordinateGenerator extends IfcTextureCoordinate 
{    
    public readonly specification: IfcTextureCoordinateGeneratorSpecification = IfcTextureCoordinateGeneratorSpecification.instance;

private Mode_? : IfcLabel
    private Parameter_? : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextureCoordinateGeneratorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureCoordinateGenerator';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextureCoordinateGenerator', 'IfcTextureCoordinate' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Mode',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Parameter',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextureCoordinateGeneratorSpecification = new IfcTextureCoordinateGeneratorSpecification();
}
