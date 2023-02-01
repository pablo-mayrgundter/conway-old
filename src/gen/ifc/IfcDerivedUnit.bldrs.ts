
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDerivedUnitElement from "./IfcDerivedUnitElement.bldrs"
import IfcDerivedUnitEnum from "./IfcDerivedUnitEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcDimensionalExponents from "./IfcDimensionalExponents.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunit.htm
 */
export default  class IfcDerivedUnit extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDerivedUnitSpecification = IfcDerivedUnitSpecification.instance;

private Elements_? : Array<IfcDerivedUnitElement>
    private UnitType_? : IfcDerivedUnitEnum
    private UserDefinedType_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDerivedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcDerivedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Elements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDerivedUnitElement>',
			optional: false
		}, 
		{
			name: 'UnitType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDerivedUnitEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDerivedUnitSpecification = new IfcDerivedUnitSpecification();
}
