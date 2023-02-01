
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPresentableText from "./IfcPresentableText.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcTextPath from "./IfcTextPath.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm
 */
export default  class IfcTextLiteral extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcTextLiteralSpecification = IfcTextLiteralSpecification.instance;

private Literal_? : IfcPresentableText
    private Placement_? : IfcAxis2Placement2D|IfcAxis2Placement3D
    private Path_? : IfcTextPath

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextLiteralSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextLiteral';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextLiteral', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Literal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPresentableText',
			optional: false
		}, 
		{
			name: 'Placement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'Path',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextPath',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextLiteralSpecification = new IfcTextLiteralSpecification();
}
