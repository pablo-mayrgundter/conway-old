
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotationFacet from "./IfcClassificationNotationFacet.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationnotation.htm
 */
export default  class IfcClassificationNotation extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcClassificationNotationSpecification = IfcClassificationNotationSpecification.instance;

private NotationFacets_? : Array<IfcClassificationNotationFacet>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationNotationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationNotation';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassificationNotation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NotationFacets',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotationFacet>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationNotationSpecification = new IfcClassificationNotationSpecification();
}
