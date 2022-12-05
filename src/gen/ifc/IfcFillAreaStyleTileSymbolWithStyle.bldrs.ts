
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletilesymbolwithstyle.htm
 */
export default class IfcFillAreaStyleTileSymbolWithStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFillAreaStyleTileSymbolWithStyle';

    public readonly __version__: number = 0;

    constructor( public readonly Symbol : IfcAnnotationSymbolOccurrence  ) {}
}

export class IfcFillAreaStyleTileSymbolWithStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleTileSymbolWithStyle';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Symbol',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnnotationSymbolOccurrence'
		}
    ];
}
