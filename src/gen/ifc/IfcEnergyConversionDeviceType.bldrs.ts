
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyconversiondevicetype.htm
 */
export default class IfcEnergyConversionDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEnergyConversionDeviceType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcEnergyConversionDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnergyConversionDeviceType';

    public readonly required: string[] = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
