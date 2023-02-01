
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastener.htm
 */
export default  class IfcMechanicalFastener extends IfcFastener 
{    
    public readonly specification: IfcMechanicalFastenerSpecification = IfcMechanicalFastenerSpecification.instance;

private NominalDiameter_? : IfcPositiveLengthMeasure
    private NominalLength_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMechanicalFastenerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalFastener';

    public readonly required: ReadonlyArray< string > = [ 'IfcMechanicalFastener', 'IfcFastener', 'IfcElementComponent', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'NominalLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalFastenerSpecification = new IfcMechanicalFastenerSpecification();
}
