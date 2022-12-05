
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcCartesianTransformationOperator from "./IfcCartesianTransformationOperator.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
 */
export default class IfcMappedItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMappedItem';

    public readonly __version__: number = 0;

    constructor( public readonly MappingSource : IfcRepresentationMap , public readonly MappingTarget : IfcCartesianTransformationOperator  ) {}
}

export class IfcMappedItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMappedItem';

    public readonly required: string[] = [ 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MappingSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationMap'
		}, 
		{
			name: 'MappingTarget',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator'
		}
    ];
}
