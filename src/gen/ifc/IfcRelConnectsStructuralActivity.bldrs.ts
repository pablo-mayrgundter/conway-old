
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralItem from "./IfcStructuralItem.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcStructuralActivity from "./IfcStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
 */
export default class IfcRelConnectsStructuralActivity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsStructuralActivity';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelConnectsStructuralActivitySpecification = IfcRelConnectsStructuralActivitySpecification.instance;

    constructor( public readonly RelatingElement : IfcStructuralItem|IfcElement , public readonly RelatedStructuralActivity : IfcStructuralActivity  ) {}
}

export class IfcRelConnectsStructuralActivitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralActivity';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralItem|IfcElement'
		}, 
		{
			name: 'RelatedStructuralActivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralActivity'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsStructuralActivitySpecification = new IfcRelConnectsStructuralActivitySpecification();
}
