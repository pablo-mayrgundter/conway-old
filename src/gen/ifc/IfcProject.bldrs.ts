
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"
import IfcUnitAssignment from "./IfcUnitAssignment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproject.htm
 */
export default  class IfcProject extends IfcObject 
{    
    public readonly specification: IfcProjectSpecification = IfcProjectSpecification.instance;

private LongName_? : IfcLabel
    private Phase_? : IfcLabel
    private RepresentationContexts_? : Array<IfcRepresentationContext>
    private UnitsInContext_? : IfcUnitAssignment

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProject';

    public readonly required: ReadonlyArray< string > = [ 'IfcProject', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LongName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Phase',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'RepresentationContexts',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationContext>',
			optional: false
		}, 
		{
			name: 'UnitsInContext',
			isCollection: false,
			rank: 0,
			baseType: 'IfcUnitAssignment',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProjectSpecification = new IfcProjectSpecification();
}
