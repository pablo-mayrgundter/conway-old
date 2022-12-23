
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColumnTypeEnum from "./IfcColumnTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolumntype.htm
 */
export default class IfcColumnType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcColumnType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcColumnTypeSpecification = IfcColumnTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcColumnTypeEnum  ) {}
}

export class IfcColumnTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColumnType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColumnTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcColumnTypeSpecification = new IfcColumnTypeSpecification();
}
