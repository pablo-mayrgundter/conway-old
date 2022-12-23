
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectiongeometry.htm
 */
export default class IfcConnectionGeometry implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionGeometry';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcConnectionGeometrySpecification = IfcConnectionGeometrySpecification.instance;

    constructor(  ) {}
}

export class IfcConnectionGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionGeometry';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionGeometrySpecification = new IfcConnectionGeometrySpecification();
}
