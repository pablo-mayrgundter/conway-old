
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"
import IfcRelConnectsStructuralMember from "./IfcRelConnectsStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
 */
export default class IfcStructuralConnection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralConnection';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralConnectionSpecification = IfcStructuralConnectionSpecification.instance;

    constructor( public readonly AppliedCondition : IfcBoundaryCondition  | undefined ) {}
}

export class IfcStructuralConnectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralConnection';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralItem', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AppliedCondition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundaryCondition'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralConnectionSpecification = new IfcStructuralConnectionSpecification();
}
