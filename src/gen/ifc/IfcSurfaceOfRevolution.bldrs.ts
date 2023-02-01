
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis1Placement from "./IfcAxis1Placement.bldrs"
import IfcLine from "./IfcLine.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm
 */
export default  class IfcSurfaceOfRevolution extends IfcSweptSurface 
{    
    public readonly specification: IfcSurfaceOfRevolutionSpecification = IfcSurfaceOfRevolutionSpecification.instance;

private AxisPosition_? : IfcAxis1Placement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceOfRevolutionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceOfRevolution';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceOfRevolution', 'IfcSweptSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AxisPosition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis1Placement',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceOfRevolutionSpecification = new IfcSurfaceOfRevolutionSpecification();
}
