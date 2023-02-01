
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcModulusOfSubgradeReactionMeasure from "./IfcModulusOfSubgradeReactionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm
 */
export default  class IfcBoundaryFaceCondition extends IfcBoundaryCondition 
{    
    public readonly specification: IfcBoundaryFaceConditionSpecification = IfcBoundaryFaceConditionSpecification.instance;

private LinearStiffnessByAreaX_? : IfcModulusOfSubgradeReactionMeasure
    private LinearStiffnessByAreaY_? : IfcModulusOfSubgradeReactionMeasure
    private LinearStiffnessByAreaZ_? : IfcModulusOfSubgradeReactionMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBoundaryFaceConditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryFaceCondition';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundaryFaceCondition', 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LinearStiffnessByAreaX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessByAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure',
			optional: true
		}, 
		{
			name: 'LinearStiffnessByAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfSubgradeReactionMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBoundaryFaceConditionSpecification = new IfcBoundaryFaceConditionSpecification();
}
