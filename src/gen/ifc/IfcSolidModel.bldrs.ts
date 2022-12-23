
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsolidmodel.htm
 */
export default class IfcSolidModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSolidModel';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSolidModelSpecification = IfcSolidModelSpecification.instance;

    constructor(  ) {}
}

export class IfcSolidModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSolidModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSolidModelSpecification = new IfcSolidModelSpecification();
}
