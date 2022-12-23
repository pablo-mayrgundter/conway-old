
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2d.htm
 */
export default class IfcCartesianTransformationOperator2D implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianTransformationOperator2D';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCartesianTransformationOperator2DSpecification = IfcCartesianTransformationOperator2DSpecification.instance;

    constructor(  ) {}
}

export class IfcCartesianTransformationOperator2DSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianTransformationOperator2D';

    public readonly required: ReadonlyArray< string > = [ 'IfcCartesianTransformationOperator', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCartesianTransformationOperator2DSpecification = new IfcCartesianTransformationOperator2DSpecification();
}
