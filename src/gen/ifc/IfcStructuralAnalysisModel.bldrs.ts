
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnalysisModelTypeEnum from "./IfcAnalysisModelTypeEnum.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralResultGroup from "./IfcStructuralResultGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm
 */
export default  class IfcStructuralAnalysisModel extends IfcSystem 
{    
    public readonly specification: IfcStructuralAnalysisModelSpecification = IfcStructuralAnalysisModelSpecification.instance;

private PredefinedType_? : IfcAnalysisModelTypeEnum
    private OrientationOf2DPlane_? : IfcAxis2Placement3D
    private LoadedBy_? : Array<IfcStructuralLoadGroup>
    private HasResults_? : Array<IfcStructuralResultGroup>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralAnalysisModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralAnalysisModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralAnalysisModel', 'IfcSystem', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnalysisModelTypeEnum',
			optional: false
		}, 
		{
			name: 'OrientationOf2DPlane',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: true
		}, 
		{
			name: 'LoadedBy',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralLoadGroup>',
			optional: true
		}, 
		{
			name: 'HasResults',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralResultGroup>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralAnalysisModelSpecification = new IfcStructuralAnalysisModelSpecification();
}
