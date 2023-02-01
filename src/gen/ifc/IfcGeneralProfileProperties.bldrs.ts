
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMassPerLengthMeasure from "./IfcMassPerLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeneralprofileproperties.htm
 */
export default  class IfcGeneralProfileProperties extends IfcProfileProperties 
{    
    public readonly specification: IfcGeneralProfilePropertiesSpecification = IfcGeneralProfilePropertiesSpecification.instance;

private PhysicalWeight_? : IfcMassPerLengthMeasure
    private Perimeter_? : IfcPositiveLengthMeasure
    private MinimumPlateThickness_? : IfcPositiveLengthMeasure
    private MaximumPlateThickness_? : IfcPositiveLengthMeasure
    private CrossSectionArea_? : IfcAreaMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeneralProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeneralProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeneralProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PhysicalWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassPerLengthMeasure',
			optional: true
		}, 
		{
			name: 'Perimeter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'MinimumPlateThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'MaximumPlateThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeneralProfilePropertiesSpecification = new IfcGeneralProfilePropertiesSpecification();
}
