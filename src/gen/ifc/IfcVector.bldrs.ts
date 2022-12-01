
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvector.htm
 */
export default class IfcVector implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVector';

    public readonly __version__: number = 0;

	Orientation : IfcDirection;
	Magnitude : IfcLengthMeasure;

}

export class IfcVectorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVector';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'Magnitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
