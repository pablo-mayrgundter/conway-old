
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm
 */
export default  class IfcExtrudedAreaSolid extends IfcSweptAreaSolid 
{    
    public readonly specification: IfcExtrudedAreaSolidSpecification = IfcExtrudedAreaSolidSpecification.instance;

private ExtrudedDirection_? : IfcDirection
    private Depth_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcExtrudedAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExtrudedAreaSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcExtrudedAreaSolid', 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ExtrudedDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: false
		}, 
		{
			name: 'Depth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcExtrudedAreaSolidSpecification = new IfcExtrudedAreaSolidSpecification();
}
