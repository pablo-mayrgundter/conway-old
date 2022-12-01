
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPoint} from "./IfcPoint.bldrs"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillareaoccurrence.htm
 */
export default class IfcAnnotationFillAreaOccurrence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationFillAreaOccurrence';

    public readonly __version__: number = 0;

	FillStyleTarget? : IfcPoint;
	GlobalOrLocal? : IfcGlobalOrLocalEnum;

}

export class IfcAnnotationFillAreaOccurrenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationFillAreaOccurrence';

    public readonly required: string[] = [ 'IfcAnnotationOccurrence', 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'FillStyleTarget',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint'
		}, 
		{
			name: 'GlobalOrLocal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGlobalOrLocalEnum'
		}
    ];
}
