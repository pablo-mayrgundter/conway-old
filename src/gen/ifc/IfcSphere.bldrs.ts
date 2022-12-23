
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphere.htm
 */
export default class IfcSphere implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSphere';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSphereSpecification = IfcSphereSpecification.instance;

    constructor( public readonly Radius : IfcPositiveLengthMeasure  ) {}
}

export class IfcSphereSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSphere';

    public readonly required: ReadonlyArray< string > = [ 'IfcCsgPrimitive3D', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSphereSpecification = new IfcSphereSpecification();
}
