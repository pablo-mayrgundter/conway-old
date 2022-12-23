
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlanarExtent from "./IfcPlanarExtent.bldrs"
import IfcBoxAlignment from "./IfcBoxAlignment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
 */
export default class IfcTextLiteralWithExtent implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextLiteralWithExtent';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTextLiteralWithExtentSpecification = IfcTextLiteralWithExtentSpecification.instance;

    constructor( public readonly Extent : IfcPlanarExtent , public readonly BoxAlignment : IfcBoxAlignment  ) {}
}

export class IfcTextLiteralWithExtentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextLiteralWithExtent';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextLiteral', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextLiteralWithExtentSpecification = new IfcTextLiteralWithExtentSpecification();
}
