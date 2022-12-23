
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelConnectsStructuralElement from "./IfcRelConnectsStructuralElement.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralmember.htm
 */
export default class IfcStructuralMember implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralMember';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralMemberSpecification = IfcStructuralMemberSpecification.instance;

    constructor(  ) {}
}

export class IfcStructuralMemberSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralMember';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralMemberSpecification = new IfcStructuralMemberSpecification();
}
