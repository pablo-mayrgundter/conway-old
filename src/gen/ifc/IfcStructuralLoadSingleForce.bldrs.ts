
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcTorqueMeasure from "./IfcTorqueMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
 */
export default  class IfcStructuralLoadSingleForce extends IfcStructuralLoadStatic 
{    
    public readonly specification: IfcStructuralLoadSingleForceSpecification = IfcStructuralLoadSingleForceSpecification.instance;

private ForceX_? : IfcForceMeasure
    private ForceY_? : IfcForceMeasure
    private ForceZ_? : IfcForceMeasure
    private MomentX_? : IfcTorqueMeasure
    private MomentY_? : IfcTorqueMeasure
    private MomentZ_? : IfcTorqueMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadSingleForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleForce';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadSingleForce', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'ForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'ForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'MomentX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure',
			optional: true
		}, 
		{
			name: 'MomentY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure',
			optional: true
		}, 
		{
			name: 'MomentZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTorqueMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadSingleForceSpecification = new IfcStructuralLoadSingleForceSpecification();
}
