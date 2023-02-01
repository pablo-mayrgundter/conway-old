
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLinearForceMeasure from "./IfcLinearForceMeasure.bldrs"
import IfcLinearMomentMeasure from "./IfcLinearMomentMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadlinearforce.htm
 */
export default  class IfcStructuralLoadLinearForce extends IfcStructuralLoadStatic 
{    
    public readonly specification: IfcStructuralLoadLinearForceSpecification = IfcStructuralLoadLinearForceSpecification.instance;

private LinearForceX_? : IfcLinearForceMeasure
    private LinearForceY_? : IfcLinearForceMeasure
    private LinearForceZ_? : IfcLinearForceMeasure
    private LinearMomentX_? : IfcLinearMomentMeasure
    private LinearMomentY_? : IfcLinearMomentMeasure
    private LinearMomentZ_? : IfcLinearMomentMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadLinearForceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadLinearForce';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadLinearForce', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LinearForceX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure',
			optional: true
		}, 
		{
			name: 'LinearForceY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure',
			optional: true
		}, 
		{
			name: 'LinearForceZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearForceMeasure',
			optional: true
		}, 
		{
			name: 'LinearMomentX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure',
			optional: true
		}, 
		{
			name: 'LinearMomentY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure',
			optional: true
		}, 
		{
			name: 'LinearMomentZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearMomentMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadLinearForceSpecification = new IfcStructuralLoadLinearForceSpecification();
}
