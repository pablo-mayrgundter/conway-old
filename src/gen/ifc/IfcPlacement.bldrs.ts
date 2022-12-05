
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplacement.htm
 */
export default class IfcPlacement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPlacement';

    public readonly __version__: number = 0;

    constructor( public readonly Location : IfcCartesianPoint  ) {}
}

export class IfcPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPlacement';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Location',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}
    ];
}
