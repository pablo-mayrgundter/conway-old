
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcShapeModel from "./IfcShapeModel.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcProductDefinitionShape from "./IfcProductDefinitionShape.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm
 */
export default  class IfcShapeAspect extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcShapeAspectSpecification = IfcShapeAspectSpecification.instance;

private ShapeRepresentations_? : Array<IfcShapeModel>
    private Name_? : IfcLabel
    private Description_? : IfcText
    private ProductDefinitional_? : boolean
    private PartOfProductDefinitionShape_? : IfcProductDefinitionShape

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcShapeAspectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShapeAspect';

    public readonly required: ReadonlyArray< string > = [ 'IfcShapeAspect' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ShapeRepresentations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcShapeModel>',
			optional: false
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'ProductDefinitional',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'PartOfProductDefinitionShape',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProductDefinitionShape',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcShapeAspectSpecification = new IfcShapeAspectSpecification();
}
