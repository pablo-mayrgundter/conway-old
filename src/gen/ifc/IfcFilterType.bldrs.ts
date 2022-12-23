
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFilterTypeEnum from "./IfcFilterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfiltertype.htm
 */
export default class IfcFilterType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFilterType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFilterTypeSpecification = IfcFilterTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcFilterTypeEnum  ) {}
}

export class IfcFilterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFilterType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTreatmentDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFilterTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFilterTypeSpecification = new IfcFilterTypeSpecification();
}
