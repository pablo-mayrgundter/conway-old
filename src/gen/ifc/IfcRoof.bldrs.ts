
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRoofTypeEnum from "./IfcRoofTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroof.htm
 */
export default class IfcRoof implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoof';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRoofSpecification = IfcRoofSpecification.instance;

    constructor( public readonly ShapeType : IfcRoofTypeEnum  ) {}
}

export class IfcRoofSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoof';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ShapeType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRoofTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRoofSpecification = new IfcRoofSpecification();
}
