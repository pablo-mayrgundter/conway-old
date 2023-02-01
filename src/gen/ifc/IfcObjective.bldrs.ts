
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMetric from "./IfcMetric.bldrs"
import IfcObjectiveEnum from "./IfcObjectiveEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm
 */
export default  class IfcObjective extends IfcConstraint 
{    
    public readonly specification: IfcObjectiveSpecification = IfcObjectiveSpecification.instance;

private BenchmarkValues_? : IfcMetric
    private ResultValues_? : IfcMetric
    private ObjectiveQualifier_? : IfcObjectiveEnum
    private UserDefinedQualifier_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcObjectiveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjective';

    public readonly required: ReadonlyArray< string > = [ 'IfcObjective', 'IfcConstraint' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BenchmarkValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMetric',
			optional: true
		}, 
		{
			name: 'ResultValues',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMetric',
			optional: true
		}, 
		{
			name: 'ObjectiveQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectiveEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcObjectiveSpecification = new IfcObjectiveSpecification();
}
