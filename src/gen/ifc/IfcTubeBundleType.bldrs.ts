
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTubeBundleTypeEnum from "./IfcTubeBundleTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctubebundletype.htm
 */
export default class IfcTubeBundleType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTubeBundleType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTubeBundleTypeSpecification = IfcTubeBundleTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcTubeBundleTypeEnum  ) {}
}

export class IfcTubeBundleTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTubeBundleType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTubeBundleTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTubeBundleTypeSpecification = new IfcTubeBundleTypeSpecification();
}
