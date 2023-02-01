
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcServiceLifeTypeEnum from "./IfcServiceLifeTypeEnum.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcservicelife.htm
 */
export default  class IfcServiceLife extends IfcControl 
{    
    public readonly specification: IfcServiceLifeSpecification = IfcServiceLifeSpecification.instance;

private ServiceLifeType_? : IfcServiceLifeTypeEnum
    private ServiceLifeDuration_? : IfcTimeMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcServiceLifeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcServiceLife';

    public readonly required: ReadonlyArray< string > = [ 'IfcServiceLife', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ServiceLifeType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcServiceLifeTypeEnum',
			optional: false
		}, 
		{
			name: 'ServiceLifeDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcServiceLifeSpecification = new IfcServiceLifeSpecification();
}
