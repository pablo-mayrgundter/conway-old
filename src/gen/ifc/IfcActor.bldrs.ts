
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcRelAssignsToActor from "./IfcRelAssignsToActor.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactor.htm
 */
export default class IfcActor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcActorSpecification = IfcActorSpecification.instance;

    constructor( public readonly TheActor : IfcOrganization|IfcPerson|IfcPersonAndOrganization  ) {}
}

export class IfcActorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActor';

    public readonly required: ReadonlyArray< string > = [ 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TheActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcActorSpecification = new IfcActorSpecification();
}
