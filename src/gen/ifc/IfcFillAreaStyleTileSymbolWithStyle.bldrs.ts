
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletilesymbolwithstyle.htm
 */
export default class IfcFillAreaStyleTileSymbolWithStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFillAreaStyleTileSymbolWithStyle';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFillAreaStyleTileSymbolWithStyleSpecification = IfcFillAreaStyleTileSymbolWithStyleSpecification.instance;

    constructor( public readonly Symbol : IfcAnnotationSymbolOccurrence  ) {}
}

export class IfcFillAreaStyleTileSymbolWithStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleTileSymbolWithStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Symbol',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAnnotationSymbolOccurrence'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleTileSymbolWithStyleSpecification = new IfcFillAreaStyleTileSymbolWithStyleSpecification();
}
