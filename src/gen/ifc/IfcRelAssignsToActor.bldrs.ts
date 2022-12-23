
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcActor from "./IfcActor.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm
 */
export default class IfcRelAssignsToActor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToActor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToActorSpecification = IfcRelAssignsToActorSpecification.instance;

    constructor( public readonly RelatingActor : IfcActor , public readonly ActingRole : IfcActorRole  | undefined ) {}
}

export class IfcRelAssignsToActorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToActor';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActor'
		}, 
		{
			name: 'ActingRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActorRole'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToActorSpecification = new IfcRelAssignsToActorSpecification();
}
