
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCoveringTypeEnum from "./IfcCoveringTypeEnum.bldrs"
import IfcRelCoversSpaces from "./IfcRelCoversSpaces.bldrs"
import IfcRelCoversBldgElements from "./IfcRelCoversBldgElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccovering.htm
 */
export default class IfcCovering implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCovering';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCoveringSpecification = IfcCoveringSpecification.instance;

    constructor( public readonly PredefinedType : IfcCoveringTypeEnum  | undefined ) {}
}

export class IfcCoveringSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCovering';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoveringTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCoveringSpecification = new IfcCoveringSpecification();
}
