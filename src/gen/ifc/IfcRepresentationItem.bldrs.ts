
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"
import IfcStyledItem from "./IfcStyledItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm
 */
export default class IfcRepresentationItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRepresentationItem';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRepresentationItemSpecification = IfcRepresentationItemSpecification.instance;

    constructor(  ) {}
}

export class IfcRepresentationItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentationItem';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRepresentationItemSpecification = new IfcRepresentationItemSpecification();
}
