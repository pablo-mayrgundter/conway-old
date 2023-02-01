
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcCartesianTransformationOperator from "./IfcCartesianTransformationOperator.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
 */
export default  class IfcMappedItem extends IfcRepresentationItem 
{    
    public readonly specification: IfcMappedItemSpecification = IfcMappedItemSpecification.instance;

private MappingSource_? : IfcRepresentationMap
    private MappingTarget_? : IfcCartesianTransformationOperator

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMappedItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMappedItem';

    public readonly required: ReadonlyArray< string > = [ 'IfcMappedItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MappingSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationMap',
			optional: false
		}, 
		{
			name: 'MappingTarget',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMappedItemSpecification = new IfcMappedItemSpecification();
}
