
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcClassificationItem from "./IfcClassificationItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm
 */
export default  class IfcClassification extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcClassificationSpecification = IfcClassificationSpecification.instance;

private Source_? : IfcLabel
    private Edition_? : IfcLabel
    private EditionDate_? : IfcCalendarDate
    private Name_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassification';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassification' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Source',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Edition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'EditionDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: true
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationSpecification = new IfcClassificationSpecification();
}
