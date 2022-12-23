
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingelement.htm
 */
export default class IfcReinforcingElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcingElement';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcReinforcingElementSpecification = IfcReinforcingElementSpecification.instance;

    constructor( public readonly SteelGrade : IfcLabel  | undefined ) {}
}

export class IfcReinforcingElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SteelGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReinforcingElementSpecification = new IfcReinforcingElementSpecification();
}
