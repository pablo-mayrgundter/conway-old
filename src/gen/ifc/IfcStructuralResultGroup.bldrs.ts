
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnalysisTheoryTypeEnum from "./IfcAnalysisTheoryTypeEnum.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralAnalysisModel from "./IfcStructuralAnalysisModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm
 */
export default  class IfcStructuralResultGroup extends IfcGroup 
{    
    public readonly specification: IfcStructuralResultGroupSpecification = IfcStructuralResultGroupSpecification.instance;

private TheoryType_? : IfcAnalysisTheoryTypeEnum
    private ResultForLoadGroup_? : IfcStructuralLoadGroup
    private IsLinear_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralResultGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralResultGroup';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralResultGroup', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TheoryType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnalysisTheoryTypeEnum',
			optional: false
		}, 
		{
			name: 'ResultForLoadGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralLoadGroup',
			optional: true
		}, 
		{
			name: 'IsLinear',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralResultGroupSpecification = new IfcStructuralResultGroupSpecification();
}
