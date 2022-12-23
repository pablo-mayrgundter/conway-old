
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitytime.htm
 */
export default class IfcQuantityTime implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityTime';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcQuantityTimeSpecification = IfcQuantityTimeSpecification.instance;

    constructor( public readonly TimeValue : IfcTimeMeasure  ) {}
}

export class IfcQuantityTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityTime';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TimeValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityTimeSpecification = new IfcQuantityTimeSpecification();
}
