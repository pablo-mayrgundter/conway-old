
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcControllerTypeEnum from "./IfcControllerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrollertype.htm
 */
export default class IfcControllerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcControllerType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcControllerTypeSpecification = IfcControllerTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcControllerTypeEnum  ) {}
}

export class IfcControllerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcControllerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcControllerTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcControllerTypeSpecification = new IfcControllerTypeSpecification();
}
