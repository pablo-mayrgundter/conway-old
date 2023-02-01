
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcline.htm
 */
export default  class IfcLine extends IfcCurve 
{    
    public readonly specification: IfcLineSpecification = IfcLineSpecification.instance;

private Pnt_? : IfcCartesianPoint
    private Dir_? : IfcVector

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLineSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLine';

    public readonly required: ReadonlyArray< string > = [ 'IfcLine', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Pnt',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: false
		}, 
		{
			name: 'Dir',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLineSpecification = new IfcLineSpecification();
}
