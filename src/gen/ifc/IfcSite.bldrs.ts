
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCompoundPlaneAngleMeasure from "./IfcCompoundPlaneAngleMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPostalAddress from "./IfcPostalAddress.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsite.htm
 */
export default  class IfcSite extends IfcSpatialStructureElement 
{    
    public readonly specification: IfcSiteSpecification = IfcSiteSpecification.instance;

private RefLatitude_? : IfcCompoundPlaneAngleMeasure
    private RefLongitude_? : IfcCompoundPlaneAngleMeasure
    private RefElevation_? : IfcLengthMeasure
    private LandTitleNumber_? : IfcLabel
    private SiteAddress_? : IfcPostalAddress

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSiteSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSite';

    public readonly required: ReadonlyArray< string > = [ 'IfcSite', 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RefLatitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompoundPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'RefLongitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompoundPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'RefElevation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'LandTitleNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'SiteAddress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPostalAddress',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSiteSpecification = new IfcSiteSpecification();
}
