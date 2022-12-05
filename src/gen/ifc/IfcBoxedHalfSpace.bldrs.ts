
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcBoundingBox from "./IfcBoundingBox.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxedhalfspace.htm
 */
export default class IfcBoxedHalfSpace implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBoxedHalfSpace';

    public readonly __version__: number = 0;

    constructor( public readonly Enclosure : IfcBoundingBox  ) {}
}

export class IfcBoxedHalfSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBoxedHalfSpace';

    public readonly required: string[] = [ 'IfcHalfSpaceSolid', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Enclosure',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundingBox'
		}
    ];
}
