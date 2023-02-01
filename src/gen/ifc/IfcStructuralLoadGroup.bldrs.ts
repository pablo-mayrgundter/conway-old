
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLoadGroupTypeEnum from "./IfcLoadGroupTypeEnum.bldrs"
import IfcActionTypeEnum from "./IfcActionTypeEnum.bldrs"
import IfcActionSourceTypeEnum from "./IfcActionSourceTypeEnum.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcStructuralResultGroup from "./IfcStructuralResultGroup.bldrs"
import IfcStructuralAnalysisModel from "./IfcStructuralAnalysisModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm
 */
export default  class IfcStructuralLoadGroup extends IfcGroup 
{    
    public readonly specification: IfcStructuralLoadGroupSpecification = IfcStructuralLoadGroupSpecification.instance;

private PredefinedType_? : IfcLoadGroupTypeEnum
    private ActionType_? : IfcActionTypeEnum
    private ActionSource_? : IfcActionSourceTypeEnum
    private Coefficient_? : IfcPositiveRatioMeasure
    private Purpose_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLoadGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadGroup';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadGroup', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLoadGroupTypeEnum',
			optional: false
		}, 
		{
			name: 'ActionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActionTypeEnum',
			optional: false
		}, 
		{
			name: 'ActionSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActionSourceTypeEnum',
			optional: false
		}, 
		{
			name: 'Coefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadGroupSpecification = new IfcStructuralLoadGroupSpecification();
}
