
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowInstrumentTypeEnum from "./IfcFlowInstrumentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowinstrumenttype.htm
 */
export default class IfcFlowInstrumentType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowInstrumentType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowInstrumentTypeSpecification = IfcFlowInstrumentTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcFlowInstrumentTypeEnum  ) {}
}

export class IfcFlowInstrumentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowInstrumentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowInstrumentTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowInstrumentTypeSpecification = new IfcFlowInstrumentTypeSpecification();
}
