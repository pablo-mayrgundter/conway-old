
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurrencyEnum from "./IfcCurrencyEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetaryunit.htm
 */
export default  class IfcMonetaryUnit extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcMonetaryUnitSpecification = IfcMonetaryUnitSpecification.instance;

private Currency_? : IfcCurrencyEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMonetaryUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMonetaryUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcMonetaryUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Currency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurrencyEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMonetaryUnitSpecification = new IfcMonetaryUnitSpecification();
}
