
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAnalysisModelTypeEnum from "./IfcAnalysisModelTypeEnum.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralResultGroup from "./IfcStructuralResultGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm
 */
export default class IfcStructuralAnalysisModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralAnalysisModel';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcAnalysisModelTypeEnum , public readonly OrientationOf2DPlane : IfcAxis2Placement3D  | undefined, public readonly LoadedBy : Array<IfcStructuralLoadGroup>  | undefined, public readonly HasResults : Array<IfcStructuralResultGroup>  | undefined ) {}
}

export class IfcStructuralAnalysisModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralAnalysisModel';

    public readonly required: string[] = [ 'IfcSystem', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnalysisModelTypeEnum'
		}, 
		{
			name: 'OrientationOf2DPlane',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D'
		}, 
		{
			name: 'LoadedBy',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralLoadGroup>'
		}, 
		{
			name: 'HasResults',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralResultGroup>'
		}
    ];
}
