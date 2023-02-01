
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileProperties from "./IfcProfileProperties.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesprofileproperties.htm
 */
export default  class IfcRelAssociatesProfileProperties extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesProfilePropertiesSpecification = IfcRelAssociatesProfilePropertiesSpecification.instance;

private RelatingProfileProperties_? : IfcProfileProperties
    private ProfileSectionLocation_? : IfcShapeAspect
    private ProfileOrientation_? : IfcPlaneAngleMeasure|IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesProfileProperties', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProfileProperties',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileProperties',
			optional: false
		}, 
		{
			name: 'ProfileSectionLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect',
			optional: true
		}, 
		{
			name: 'ProfileOrientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure|IfcDirection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesProfilePropertiesSpecification = new IfcRelAssociatesProfilePropertiesSpecification();
}
