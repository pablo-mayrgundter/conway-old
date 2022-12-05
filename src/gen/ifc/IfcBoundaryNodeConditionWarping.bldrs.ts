
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcWarpingMomentMeasure from "./IfcWarpingMomentMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodeconditionwarping.htm
 */
export default class IfcBoundaryNodeConditionWarping implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoundaryNodeConditionWarping';

    public readonly __version__: number = 0;

    constructor( public readonly WarpingStiffness : IfcWarpingMomentMeasure  | undefined ) {}
}

export class IfcBoundaryNodeConditionWarpingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoundaryNodeConditionWarping';

    public readonly required: string[] = [ 'IfcBoundaryNodeCondition', 'IfcBoundaryCondition' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'WarpingStiffness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWarpingMomentMeasure'
		}
    ];
}
