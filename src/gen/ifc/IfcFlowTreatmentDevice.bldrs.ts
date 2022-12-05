
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowtreatmentdevice.htm
 */
export default class IfcFlowTreatmentDevice implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowTreatmentDevice';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFlowTreatmentDeviceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowTreatmentDevice';

    public readonly required: string[] = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
