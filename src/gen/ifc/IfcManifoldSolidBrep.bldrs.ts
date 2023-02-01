
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClosedShell from "./IfcClosedShell.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
 */
export default abstract class IfcManifoldSolidBrep extends IfcSolidModel 
{    
    public readonly specification: IfcManifoldSolidBrepSpecification = IfcManifoldSolidBrepSpecification.instance;

private Outer_? : IfcClosedShell

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcManifoldSolidBrepSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcManifoldSolidBrep';

    public readonly required: ReadonlyArray< string > = [ 'IfcManifoldSolidBrep', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Outer',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClosedShell',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcManifoldSolidBrepSpecification = new IfcManifoldSolidBrepSpecification();
}
