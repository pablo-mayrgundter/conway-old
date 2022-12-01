
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcShapeAspect} from "./IfcShapeAspect.bldrs"
import {IfcStructuralLoad} from "./IfcStructuralLoad.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructurallinearactionvarying.htm
 */
export default class IfcStructuralLinearActionVarying implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLinearActionVarying';

    public readonly __version__: number = 0;

	VaryingAppliedLoadLocation : IfcShapeAspect;
	SubsequentAppliedLoads : Array<IfcStructuralLoad>;

}

export class IfcStructuralLinearActionVaryingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLinearActionVarying';

    public readonly required: string[] = [ 'IfcStructuralLinearAction', 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'VaryingAppliedLoadLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}, 
		{
			name: 'SubsequentAppliedLoads',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcStructuralLoad>'
		}
    ];
}
