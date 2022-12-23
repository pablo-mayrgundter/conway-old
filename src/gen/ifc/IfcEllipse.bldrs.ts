
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipse.htm
 */
export default class IfcEllipse implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEllipse';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEllipseSpecification = IfcEllipseSpecification.instance;

    constructor( public readonly SemiAxis1 : IfcPositiveLengthMeasure , public readonly SemiAxis2 : IfcPositiveLengthMeasure  ) {}
}

export class IfcEllipseSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEllipse';

    public readonly required: ReadonlyArray< string > = [ 'IfcConic', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SemiAxis1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'SemiAxis2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEllipseSpecification = new IfcEllipseSpecification();
}
