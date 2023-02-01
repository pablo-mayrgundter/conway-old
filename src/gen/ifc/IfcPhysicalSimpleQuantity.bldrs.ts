
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm
 */
export default abstract class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity 
{    
    public readonly specification: IfcPhysicalSimpleQuantitySpecification = IfcPhysicalSimpleQuantitySpecification.instance;

private Unit_? : IfcNamedUnit

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPhysicalSimpleQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalSimpleQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNamedUnit',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPhysicalSimpleQuantitySpecification = new IfcPhysicalSimpleQuantitySpecification();
}
