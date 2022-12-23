
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm
 */
export default class IfcCartesianTransformationOperator3D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator3D';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCartesianTransformationOperator3DSpecification = IfcCartesianTransformationOperator3DSpecification.instance;

    constructor( public readonly Axis3 : IfcDirection  | undefined ) {}
}

export class IfcCartesianTransformationOperator3DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator3D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Axis3',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator3DSpecification = new IfcCartesianTransformationOperator3DSpecification();
}
