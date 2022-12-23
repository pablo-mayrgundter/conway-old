
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowDirectionEnum from "./IfcFlowDirectionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm
 */
export default class IfcDistributionPort implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionPort';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDistributionPortSpecification = IfcDistributionPortSpecification.instance;

    constructor( public readonly FlowDirection : IfcFlowDirectionEnum  | undefined ) {}
}

export class IfcDistributionPortSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionPort';

    public readonly required: ReadonlyArray< string > = [ 'IfcPort', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FlowDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowDirectionEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionPortSpecification = new IfcDistributionPortSpecification();
}
