
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcAnnotationSurface from "./IfcAnnotationSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm
 */
export default class IfcTextureCoordinate implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextureCoordinate';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcTextureCoordinateSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureCoordinate';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
