
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAlarmTypeEnum from "./IfcAlarmTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcalarmtype.htm
 */
export default class IfcAlarmType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAlarmType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAlarmTypeSpecification = IfcAlarmTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcAlarmTypeEnum  ) {}
}

export class IfcAlarmTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAlarmType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAlarmTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAlarmTypeSpecification = new IfcAlarmTypeSpecification();
}
