
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMemberTypeEnum from "./IfcMemberTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmembertype.htm
 */
export default class IfcMemberType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMemberType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMemberTypeSpecification = IfcMemberTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcMemberTypeEnum  ) {}
}

export class IfcMemberTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMemberType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMemberTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMemberTypeSpecification = new IfcMemberTypeSpecification();
}
