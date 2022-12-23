
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfaceouterbound.htm
 */
export default class IfcFaceOuterBound implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFaceOuterBound';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFaceOuterBoundSpecification = IfcFaceOuterBoundSpecification.instance;

    constructor(  ) {}
}

export class IfcFaceOuterBoundSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceOuterBound';

    public readonly required: ReadonlyArray< string > = [ 'IfcFaceBound', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFaceOuterBoundSpecification = new IfcFaceOuterBoundSpecification();
}
