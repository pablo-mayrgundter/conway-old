
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationnotationfacet.htm
 */
export default  class IfcClassificationNotationFacet extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcClassificationNotationFacetSpecification = IfcClassificationNotationFacetSpecification.instance;

private NotationValue_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationNotationFacetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationNotationFacet';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassificationNotationFacet' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NotationValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationNotationFacetSpecification = new IfcClassificationNotationFacetSpecification();
}
