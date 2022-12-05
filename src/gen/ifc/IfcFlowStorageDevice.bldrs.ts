
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowstoragedevice.htm
 */
export default class IfcFlowStorageDevice implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowStorageDevice';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFlowStorageDeviceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowStorageDevice';

    public readonly required: string[] = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
