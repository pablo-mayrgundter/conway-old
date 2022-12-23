
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGridAxis from "./IfcGridAxis.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
 */
export default class IfcVirtualGridIntersection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcVirtualGridIntersection';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcVirtualGridIntersectionSpecification = IfcVirtualGridIntersectionSpecification.instance;

    constructor( public readonly IntersectingAxes : Array<IfcGridAxis> , public readonly OffsetDistances : Array<IfcLengthMeasure>  ) {}
}

export class IfcVirtualGridIntersectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVirtualGridIntersection';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'IntersectingAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>'
		}, 
		{
			name: 'OffsetDistances',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLengthMeasure>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVirtualGridIntersectionSpecification = new IfcVirtualGridIntersectionSpecification();
}
