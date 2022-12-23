
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralAction from "./IfcStructuralAction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralreaction.htm
 */
export default class IfcStructuralReaction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralReaction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralReactionSpecification = IfcStructuralReactionSpecification.instance;

    constructor(  ) {}
}

export class IfcStructuralReactionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralReaction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralReactionSpecification = new IfcStructuralReactionSpecification();
}
