
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProcess from "./IfcProcess.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm
 */
export default  class IfcRelAssignsToProcess extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToProcessSpecification = IfcRelAssignsToProcessSpecification.instance;

private RelatingProcess_? : IfcProcess
    private QuantityInProcess_? : IfcMeasureWithUnit

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToProcessSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProcess';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToProcess', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess',
			optional: false
		}, 
		{
			name: 'QuantityInProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProcessSpecification = new IfcRelAssignsToProcessSpecification();
}
