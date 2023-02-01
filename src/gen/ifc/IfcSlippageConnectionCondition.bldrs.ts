
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm
 */
export default  class IfcSlippageConnectionCondition extends IfcStructuralConnectionCondition 
{    
    public readonly specification: IfcSlippageConnectionConditionSpecification = IfcSlippageConnectionConditionSpecification.instance;

private SlippageX_? : IfcLengthMeasure
    private SlippageY_? : IfcLengthMeasure
    private SlippageZ_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSlippageConnectionConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlippageConnectionCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcSlippageConnectionCondition', 'IfcStructuralConnectionCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SlippageX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'SlippageY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'SlippageZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSlippageConnectionConditionSpecification = new IfcSlippageConnectionConditionSpecification();
}
