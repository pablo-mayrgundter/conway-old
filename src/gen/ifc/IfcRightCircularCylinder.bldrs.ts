
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcylinder.htm
 */
export default class IfcRightCircularCylinder implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRightCircularCylinder';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRightCircularCylinderSpecification = IfcRightCircularCylinderSpecification.instance;

    constructor( public readonly Height : IfcPositiveLengthMeasure , public readonly Radius : IfcPositiveLengthMeasure  ) {}
}

export class IfcRightCircularCylinderSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRightCircularCylinder';

    public readonly required: ReadonlyArray< string > = [ 'IfcCsgPrimitive3D', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRightCircularCylinderSpecification = new IfcRightCircularCylinderSpecification();
}
