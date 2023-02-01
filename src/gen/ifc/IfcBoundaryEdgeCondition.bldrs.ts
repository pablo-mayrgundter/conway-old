
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcModulusOfLinearSubgradeReactionMeasure from "./IfcModulusOfLinearSubgradeReactionMeasure.bldrs"
import IfcModulusOfRotationalSubgradeReactionMeasure from "./IfcModulusOfRotationalSubgradeReactionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
 */
export default  class IfcBoundaryEdgeCondition extends IfcBoundaryCondition 
{    
    public readonly specification: IfcBoundaryEdgeConditionSpecification = IfcBoundaryEdgeConditionSpecification.instance;

private LinearStiffnessByLengthX_? : IfcModulusOfLinearSubgradeReactionMeasure
    private LinearStiffnessByLengthY_? : IfcModulusOfLinearSubgradeReactionMeasure
    private LinearStiffnessByLengthZ_? : IfcModulusOfLinearSubgradeReactionMeasure
    private RotationalStiffnessByLengthX_? : IfcModulusOfRotationalSubgradeReactionMeasure
    private RotationalStiffnessByLengthY_? : IfcModulusOfRotationalSubgradeReactionMeasure
    private RotationalStiffnessByLengthZ_? : IfcModulusOfRotationalSubgradeReactionMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBoundaryEdgeConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryEdgeCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundaryEdgeCondition', 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LinearStiffnessByLengthX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessByLengthY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessByLengthZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfLinearSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessByLengthX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessByLengthY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'RotationalStiffnessByLengthZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfRotationalSubgradeReactionMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundaryEdgeConditionSpecification = new IfcBoundaryEdgeConditionSpecification();
}
