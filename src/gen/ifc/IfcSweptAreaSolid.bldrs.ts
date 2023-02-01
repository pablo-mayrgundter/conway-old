
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm
 */
export default abstract class IfcSweptAreaSolid extends IfcSolidModel 
{    
    public readonly specification: IfcSweptAreaSolidSpecification = IfcSweptAreaSolidSpecification.instance;

private SweptArea_? : IfcProfileDef
    private Position_? : IfcAxis2Placement3D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSweptAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptAreaSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SweptArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: false
		}, 
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSweptAreaSolidSpecification = new IfcSweptAreaSolidSpecification();
}
