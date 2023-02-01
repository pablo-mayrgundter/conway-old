
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcInternalOrExternalEnum from "./IfcInternalOrExternalEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcRelCoversSpaces from "./IfcRelCoversSpaces.bldrs"
import IfcRelSpaceBoundary from "./IfcRelSpaceBoundary.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspace.htm
 */
export default  class IfcSpace extends IfcSpatialStructureElement 
{    
    public readonly specification: IfcSpaceSpecification = IfcSpaceSpecification.instance;

private InteriorOrExteriorSpace_? : IfcInternalOrExternalEnum
    private ElevationWithFlooring_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpace';

    public readonly required: ReadonlyArray< string > = [ 'IfcSpace', 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InteriorOrExteriorSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInternalOrExternalEnum',
			optional: false
		}, 
		{
			name: 'ElevationWithFlooring',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceSpecification = new IfcSpaceSpecification();
}
