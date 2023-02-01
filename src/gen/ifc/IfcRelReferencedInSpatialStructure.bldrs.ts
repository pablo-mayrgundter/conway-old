
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelreferencedinspatialstructure.htm
 */
export default  class IfcRelReferencedInSpatialStructure extends IfcRelConnects 
{    
    public readonly specification: IfcRelReferencedInSpatialStructureSpecification = IfcRelReferencedInSpatialStructureSpecification.instance;

private RelatedElements_? : Array<IfcProduct>
    private RelatingStructure_? : IfcSpatialStructureElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelReferencedInSpatialStructureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelReferencedInSpatialStructure';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelReferencedInSpatialStructure', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProduct>',
			optional: false
		}, 
		{
			name: 'RelatingStructure',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelReferencedInSpatialStructureSpecification = new IfcRelReferencedInSpatialStructureSpecification();
}
