
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm
 */
export default  class IfcConversionBasedUnit extends IfcNamedUnit 
{    
    public readonly specification: IfcConversionBasedUnitSpecification = IfcConversionBasedUnitSpecification.instance;

private Name_? : IfcLabel
    private ConversionFactor_? : IfcMeasureWithUnit

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConversionBasedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConversionBasedUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcConversionBasedUnit', 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'ConversionFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConversionBasedUnitSpecification = new IfcConversionBasedUnitSpecification();
}
