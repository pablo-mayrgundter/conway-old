
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAnalysisTheoryTypeEnum from "./IfcAnalysisTheoryTypeEnum.bldrs"
import IfcStructuralLoadGroup from "./IfcStructuralLoadGroup.bldrs"
import IfcStructuralAnalysisModel from "./IfcStructuralAnalysisModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm
 */
export default class IfcStructuralResultGroup implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralResultGroup';

    public readonly __version__: number = 0;

    constructor( public readonly TheoryType : IfcAnalysisTheoryTypeEnum , public readonly ResultForLoadGroup : IfcStructuralLoadGroup  | undefined, public readonly IsLinear : boolean  ) {}
}

export class IfcStructuralResultGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralResultGroup';

    public readonly required: string[] = [ 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TheoryType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnalysisTheoryTypeEnum'
		}, 
		{
			name: 'ResultForLoadGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralLoadGroup'
		}, 
		{
			name: 'IsLinear',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}