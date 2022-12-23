
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialstructureelementtype.htm
 */
export default class IfcSpatialStructureElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpatialStructureElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSpatialStructureElementTypeSpecification = IfcSpatialStructureElementTypeSpecification.instance;

    constructor(  ) {}
}

export class IfcSpatialStructureElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpatialStructureElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpatialStructureElementTypeSpecification = new IfcSpatialStructureElementTypeSpecification();
}
