
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm
 */
export default  class IfcMaterialClassificationRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMaterialClassificationRelationshipSpecification = IfcMaterialClassificationRelationshipSpecification.instance;

private MaterialClassifications_? : Array<IfcClassificationNotation|IfcClassificationReference>
    private ClassifiedMaterial_? : IfcMaterial

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMaterialClassificationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialClassificationRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialClassificationRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MaterialClassifications',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationNotation|IfcClassificationReference>',
			optional: false
		}, 
		{
			name: 'ClassifiedMaterial',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialClassificationRelationshipSpecification = new IfcMaterialClassificationRelationshipSpecification();
}
