
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementSubtraction from "./IfcFeatureElementSubtraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
 */
export default class IfcRelVoidsElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelVoidsElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelVoidsElementSpecification = IfcRelVoidsElementSpecification.instance;

    constructor( public readonly RelatingBuildingElement : IfcElement , public readonly RelatedOpeningElement : IfcFeatureElementSubtraction  ) {}
}

export class IfcRelVoidsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelVoidsElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedOpeningElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementSubtraction'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelVoidsElementSpecification = new IfcRelVoidsElementSpecification();
}
