
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcSurface from "./IfcSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurvesweptareasolid.htm
 */
export default  class IfcSurfaceCurveSweptAreaSolid extends IfcSweptAreaSolid 
{    
    public readonly specification: IfcSurfaceCurveSweptAreaSolidSpecification = IfcSurfaceCurveSweptAreaSolidSpecification.instance;

private Directrix_? : IfcCurve
    private StartParam_? : IfcParameterValue
    private EndParam_? : IfcParameterValue
    private ReferenceSurface_? : IfcSurface

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceCurveSweptAreaSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceCurveSweptAreaSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceCurveSweptAreaSolid', 'IfcSweptAreaSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Directrix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'StartParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'EndParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'ReferenceSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceCurveSweptAreaSolidSpecification = new IfcSurfaceCurveSweptAreaSolidSpecification();
}
