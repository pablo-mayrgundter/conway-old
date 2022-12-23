
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectDefinition from "./IfcObjectDefinition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldecomposes.htm
 */
export default class IfcRelDecomposes implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelDecomposes';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelDecomposesSpecification = IfcRelDecomposesSpecification.instance;

    constructor( public readonly RelatingObject : IfcObjectDefinition , public readonly RelatedObjects : Array<IfcObjectDefinition>  ) {}
}

export class IfcRelDecomposesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDecomposes';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingObject',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectDefinition'
		}, 
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObjectDefinition>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDecomposesSpecification = new IfcRelDecomposesSpecification();
}
