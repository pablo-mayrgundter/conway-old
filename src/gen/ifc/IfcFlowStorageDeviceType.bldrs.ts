
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowstoragedevicetype.htm
 */
export default class IfcFlowStorageDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowStorageDeviceType';

    public readonly __version__: number = 0;


}

export class IfcFlowStorageDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowStorageDeviceType';

    public readonly required: string[] = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
