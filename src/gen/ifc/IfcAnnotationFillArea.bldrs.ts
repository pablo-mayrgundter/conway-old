
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm
 */
export default class IfcAnnotationFillArea implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAnnotationFillArea';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAnnotationFillAreaSpecification = IfcAnnotationFillAreaSpecification.instance;

    constructor( public readonly OuterBoundary : IfcCurve , public readonly InnerBoundaries : Array<IfcCurve>  | undefined ) {}
}

export class IfcAnnotationFillAreaSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationFillArea';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OuterBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'InnerBoundaries',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationFillAreaSpecification = new IfcAnnotationFillAreaSpecification();
}
