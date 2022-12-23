
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcResource from "./IfcResource.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoresource.htm
 */
export default class IfcRelAssignsToResource implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToResource';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToResourceSpecification = IfcRelAssignsToResourceSpecification.instance;

    constructor( public readonly RelatingResource : IfcResource  ) {}
}

export class IfcRelAssignsToResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToResource';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingResource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcResource'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToResourceSpecification = new IfcRelAssignsToResourceSpecification();
}
