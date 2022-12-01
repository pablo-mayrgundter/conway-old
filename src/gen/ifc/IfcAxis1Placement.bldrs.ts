
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis1placement.htm
 */
export default class IfcAxis1Placement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAxis1Placement';

    public readonly __version__: number = 0;

	Axis? : IfcDirection;

}

export class IfcAxis1PlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAxis1Placement';

    public readonly required: string[] = [ 'IfcPlacement', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Axis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];
}
