
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm
 */
export default  class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic 
{    
    public readonly specification: IfcStructuralLoadTemperatureSpecification = IfcStructuralLoadTemperatureSpecification.instance;

private DeltaT_Constant_? : IfcThermodynamicTemperatureMeasure
    private DeltaT_Y_? : IfcThermodynamicTemperatureMeasure
    private DeltaT_Z_? : IfcThermodynamicTemperatureMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadTemperatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadTemperature';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadTemperature', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DeltaT_Constant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}, 
		{
			name: 'DeltaT_Y',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}, 
		{
			name: 'DeltaT_Z',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadTemperatureSpecification = new IfcStructuralLoadTemperatureSpecification();
}
