
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyconversiondevice.htm
 */
export default class IfcEnergyConversionDevice implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEnergyConversionDevice';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEnergyConversionDeviceSpecification = IfcEnergyConversionDeviceSpecification.instance;

    constructor(  ) {}
}

export class IfcEnergyConversionDeviceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnergyConversionDevice';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEnergyConversionDeviceSpecification = new IfcEnergyConversionDeviceSpecification();
}
