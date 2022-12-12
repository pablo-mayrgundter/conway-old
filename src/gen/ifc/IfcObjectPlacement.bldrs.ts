
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"
import IfcLocalPlacement from "./IfcLocalPlacement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm
 */
export default class IfcObjectPlacement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcObjectPlacement';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcObjectPlacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcObjectPlacement';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}