
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassification from "./IfcClassification.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm
 */
export default  class IfcClassificationReference extends IfcExternalReference 
{    
    public readonly specification: IfcClassificationReferenceSpecification = IfcClassificationReferenceSpecification.instance;

private ReferencedSource_? : IfcClassification

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationReference';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassificationReference', 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ReferencedSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassification',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationReferenceSpecification = new IfcClassificationReferenceSpecification();
}
