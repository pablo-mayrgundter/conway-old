
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProcess from "./IfcProcess.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm
 */
export default class IfcRelAssignsToProcess implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToProcess';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToProcessSpecification = IfcRelAssignsToProcessSpecification.instance;

    constructor( public readonly RelatingProcess : IfcProcess , public readonly QuantityInProcess : IfcMeasureWithUnit  | undefined ) {}
}

export class IfcRelAssignsToProcessSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProcess';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess'
		}, 
		{
			name: 'QuantityInProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProcessSpecification = new IfcRelAssignsToProcessSpecification();
}
