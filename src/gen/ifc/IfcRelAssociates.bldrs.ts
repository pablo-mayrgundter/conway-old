
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRoot from "./IfcRoot.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociates.htm
 */
export default class IfcRelAssociates implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociates';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesSpecification = IfcRelAssociatesSpecification.instance;

    constructor( public readonly RelatedObjects : Array<IfcRoot>  ) {}
}

export class IfcRelAssociatesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociates';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRoot>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesSpecification = new IfcRelAssociatesSpecification();
}
