
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcWarpingMomentMeasure from "./IfcWarpingMomentMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm
 */
export default class IfcStructuralLoadSingleForceWarping implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadSingleForceWarping';

    public readonly __version__: number = 0;

    constructor( public readonly WarpingMoment : IfcWarpingMomentMeasure  | undefined ) {}
}

export class IfcStructuralLoadSingleForceWarpingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleForceWarping';

    public readonly required: string[] = [ 'IfcStructuralLoadSingleForce', 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'WarpingMoment',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWarpingMomentMeasure'
		}
    ];
}
