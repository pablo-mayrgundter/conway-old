
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmovingdevice.htm
 */
export default class IfcFlowMovingDevice implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowMovingDevice';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFlowMovingDeviceSpecification = IfcFlowMovingDeviceSpecification.instance;

    constructor(  ) {}
}

export class IfcFlowMovingDeviceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMovingDevice';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowMovingDeviceSpecification = new IfcFlowMovingDeviceSpecification();
}
