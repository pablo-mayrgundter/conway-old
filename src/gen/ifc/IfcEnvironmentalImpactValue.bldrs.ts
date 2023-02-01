
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcEnvironmentalImpactCategoryEnum from "./IfcEnvironmentalImpactCategoryEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenvironmentalimpactvalue.htm
 */
export default  class IfcEnvironmentalImpactValue extends IfcAppliedValue 
{    
    public readonly specification: IfcEnvironmentalImpactValueSpecification = IfcEnvironmentalImpactValueSpecification.instance;

private ImpactType_? : IfcLabel
    private Category_? : IfcEnvironmentalImpactCategoryEnum
    private UserDefinedCategory_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEnvironmentalImpactValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnvironmentalImpactValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnvironmentalImpactValue', 'IfcAppliedValue' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ImpactType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Category',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEnvironmentalImpactCategoryEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedCategory',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEnvironmentalImpactValueSpecification = new IfcEnvironmentalImpactValueSpecification();
}
