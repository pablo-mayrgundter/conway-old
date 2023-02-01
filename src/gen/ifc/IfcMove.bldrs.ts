
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmove.htm
 */
export default  class IfcMove extends IfcTask 
{    
    public readonly specification: IfcMoveSpecification = IfcMoveSpecification.instance;

private MoveFrom_? : IfcSpatialStructureElement
    private MoveTo_? : IfcSpatialStructureElement
    private PunchList_? : Array<IfcText>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMoveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMove';

    public readonly required: ReadonlyArray< string > = [ 'IfcMove', 'IfcTask', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MoveFrom',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement',
			optional: false
		}, 
		{
			name: 'MoveTo',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement',
			optional: false
		}, 
		{
			name: 'PunchList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcText>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMoveSpecification = new IfcMoveSpecification();
}
