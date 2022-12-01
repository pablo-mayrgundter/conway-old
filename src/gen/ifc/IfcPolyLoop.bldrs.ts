
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCartesianPoint} from "./IfcCartesianPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm
 */
export default class IfcPolyLoop implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPolyLoop';

    public readonly __version__: number = 0;

	Polygon : Array<IfcCartesianPoint>;

}

export class IfcPolyLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPolyLoop';

    public readonly required: string[] = [ 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Polygon',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>'
		}
    ];
}
