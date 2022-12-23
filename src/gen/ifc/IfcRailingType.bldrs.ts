
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRailingTypeEnum from "./IfcRailingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrailingtype.htm
 */
export default class IfcRailingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRailingType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRailingTypeSpecification = IfcRailingTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcRailingTypeEnum  ) {}
}

export class IfcRailingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRailingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRailingTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRailingTypeSpecification = new IfcRailingTypeSpecification();
}
