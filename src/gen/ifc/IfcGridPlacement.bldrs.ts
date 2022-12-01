
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm
 */
export default class IfcGridPlacement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGridPlacement';

    public readonly __version__: number = 0;

	PlacementLocation : IfcVirtualGridIntersection;
	PlacementRefDirection? : IfcVirtualGridIntersection;

}

export class IfcGridPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGridPlacement';

    public readonly required: string[] = [ 'IfcObjectPlacement' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PlacementLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVirtualGridIntersection'
		}, 
		{
			name: 'PlacementRefDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVirtualGridIntersection'
		}
    ];
}
