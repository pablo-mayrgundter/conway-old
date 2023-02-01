
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfailureconnectioncondition.htm
 */
export default  class IfcFailureConnectionCondition extends IfcStructuralConnectionCondition 
{    
    public readonly specification: IfcFailureConnectionConditionSpecification = IfcFailureConnectionConditionSpecification.instance;

private TensionFailureX_? : IfcForceMeasure
    private TensionFailureY_? : IfcForceMeasure
    private TensionFailureZ_? : IfcForceMeasure
    private CompressionFailureX_? : IfcForceMeasure
    private CompressionFailureY_? : IfcForceMeasure
    private CompressionFailureZ_? : IfcForceMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFailureConnectionConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFailureConnectionCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcFailureConnectionCondition', 'IfcStructuralConnectionCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TensionFailureX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'TensionFailureY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'TensionFailureZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'CompressionFailureX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'CompressionFailureY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}, 
		{
			name: 'CompressionFailureZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFailureConnectionConditionSpecification = new IfcFailureConnectionConditionSpecification();
}
