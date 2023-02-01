
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLinearStiffnessMeasure from "./IfcLinearStiffnessMeasure.bldrs"
import IfcRotationalStiffnessMeasure from "./IfcRotationalStiffnessMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm
 */
export default  class IfcBoundaryNodeCondition extends IfcBoundaryCondition 
{    
    public readonly specification: IfcBoundaryNodeConditionSpecification = IfcBoundaryNodeConditionSpecification.instance;

private LinearStiffnessX_? : IfcLinearStiffnessMeasure
    private LinearStiffnessY_? : IfcLinearStiffnessMeasure
    private LinearStiffnessZ_? : IfcLinearStiffnessMeasure
    private RotationalStiffnessX_? : IfcRotationalStiffnessMeasure
    private RotationalStiffnessY_? : IfcRotationalStiffnessMeasure
    private RotationalStiffnessZ_? : IfcRotationalStiffnessMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBoundaryNodeConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryNodeCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundaryNodeCondition', 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LinearStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLinearStiffnessMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRotationalStiffnessMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundaryNodeConditionSpecification = new IfcBoundaryNodeConditionSpecification();
}
