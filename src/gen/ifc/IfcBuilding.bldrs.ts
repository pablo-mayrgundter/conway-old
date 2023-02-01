
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPostalAddress from "./IfcPostalAddress.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuilding.htm
 */
export default  class IfcBuilding extends IfcSpatialStructureElement 
{    
    public readonly specification: IfcBuildingSpecification = IfcBuildingSpecification.instance;

private ElevationOfRefHeight_? : IfcLengthMeasure
    private ElevationOfTerrain_? : IfcLengthMeasure
    private BuildingAddress_? : IfcPostalAddress

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBuildingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuilding';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuilding', 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ElevationOfRefHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'ElevationOfTerrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'BuildingAddress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPostalAddress',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingSpecification = new IfcBuildingSpecification();
}
