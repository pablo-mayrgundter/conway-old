
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTransportElementTypeEnum from "./IfcTransportElementTypeEnum.bldrs"
import IfcMassMeasure from "./IfcMassMeasure.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctransportelement.htm
 */
export default  class IfcTransportElement extends IfcElement 
{    
    public readonly specification: IfcTransportElementSpecification = IfcTransportElementSpecification.instance;

private OperationType_? : IfcTransportElementTypeEnum
    private CapacityByWeight_? : IfcMassMeasure
    private CapacityByNumber_? : IfcCountMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTransportElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTransportElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcTransportElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransportElementTypeEnum',
			optional: true
		}, 
		{
			name: 'CapacityByWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassMeasure',
			optional: true
		}, 
		{
			name: 'CapacityByNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTransportElementSpecification = new IfcTransportElementSpecification();
}
