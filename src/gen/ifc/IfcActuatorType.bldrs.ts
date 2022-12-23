
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcActuatorTypeEnum from "./IfcActuatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactuatortype.htm
 */
export default class IfcActuatorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcActuatorType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcActuatorTypeSpecification = IfcActuatorTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcActuatorTypeEnum  ) {}
}

export class IfcActuatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActuatorType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActuatorTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcActuatorTypeSpecification = new IfcActuatorTypeSpecification();
}
