
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementAddition from "./IfcFeatureElementAddition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
 */
export default class IfcRelProjectsElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelProjectsElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelProjectsElementSpecification = IfcRelProjectsElementSpecification.instance;

    constructor( public readonly RelatingElement : IfcElement , public readonly RelatedFeatureElement : IfcFeatureElementAddition  ) {}
}

export class IfcRelProjectsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelProjectsElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedFeatureElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementAddition'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelProjectsElementSpecification = new IfcRelProjectsElementSpecification();
}
