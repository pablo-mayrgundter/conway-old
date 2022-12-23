
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPileTypeEnum from "./IfcPileTypeEnum.bldrs"
import IfcPileConstructionEnum from "./IfcPileConstructionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpile.htm
 */
export default class IfcPile implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPile';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPileSpecification = IfcPileSpecification.instance;

    constructor( public readonly PredefinedType : IfcPileTypeEnum , public readonly ConstructionType : IfcPileConstructionEnum  | undefined ) {}
}

export class IfcPileSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPile';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPileTypeEnum'
		}, 
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPileConstructionEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPileSpecification = new IfcPileSpecification();
}
