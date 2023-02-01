
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralReaction from "./IfcStructuralReaction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralaction.htm
 */
export default abstract class IfcStructuralAction extends IfcStructuralActivity 
{    
    public readonly specification: IfcStructuralActionSpecification = IfcStructuralActionSpecification.instance;

private DestabilizingLoad_? : boolean
    private CausedBy_? : IfcStructuralReaction

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DestabilizingLoad',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'CausedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralReaction',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralActionSpecification = new IfcStructuralActionSpecification();
}
