
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsteelprofileproperties.htm
 */
export default  class IfcStructuralSteelProfileProperties extends IfcStructuralProfileProperties 
{    
    public readonly specification: IfcStructuralSteelProfilePropertiesSpecification = IfcStructuralSteelProfilePropertiesSpecification.instance;

private ShearAreaZ_? : IfcAreaMeasure
    private ShearAreaY_? : IfcAreaMeasure
    private PlasticShapeFactorY_? : IfcPositiveRatioMeasure
    private PlasticShapeFactorZ_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralSteelProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSteelProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralSteelProfileProperties', 'IfcStructuralProfileProperties', 'IfcGeneralProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ShearAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'ShearAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: true
		}, 
		{
			name: 'PlasticShapeFactorY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'PlasticShapeFactorZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralSteelProfilePropertiesSpecification = new IfcStructuralSteelProfilePropertiesSpecification();
}
