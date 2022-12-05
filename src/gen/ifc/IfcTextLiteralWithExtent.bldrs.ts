
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPlanarExtent from "./IfcPlanarExtent.bldrs"
import IfcBoxAlignment from "./IfcBoxAlignment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
 */
export default class IfcTextLiteralWithExtent implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextLiteralWithExtent';

    public readonly __version__: number = 0;

    constructor( public readonly Extent : IfcPlanarExtent , public readonly BoxAlignment : IfcBoxAlignment  ) {}
}

export class IfcTextLiteralWithExtentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextLiteralWithExtent';

    public readonly required: string[] = [ 'IfcTextLiteral', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Extent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlanarExtent'
		}, 
		{
			name: 'BoxAlignment',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoxAlignment'
		}
    ];
}
