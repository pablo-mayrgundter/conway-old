
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricalcircuit.htm
 */
export default class IfcElectricalCircuit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricalCircuit';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElectricalCircuitSpecification = IfcElectricalCircuitSpecification.instance;

    constructor(  ) {}
}

export class IfcElectricalCircuitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricalCircuit';

    public readonly required: ReadonlyArray< string > = [ 'IfcSystem', 'IfcGroup', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricalCircuitSpecification = new IfcElectricalCircuitSpecification();
}
