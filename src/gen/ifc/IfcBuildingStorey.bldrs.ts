
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingstorey.htm
 */
export default class IfcBuildingStorey implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBuildingStorey';

    public readonly __version__: number = 0;

	Elevation? : IfcLengthMeasure;

}

export class IfcBuildingStoreySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingStorey';

    public readonly required: string[] = [ 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Elevation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
