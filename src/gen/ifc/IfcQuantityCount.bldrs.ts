
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitycount.htm
 */
export default class IfcQuantityCount implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityCount';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcQuantityCountSpecification = IfcQuantityCountSpecification.instance;

    constructor( public readonly CountValue : IfcCountMeasure  ) {}
}

export class IfcQuantityCountSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityCount';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CountValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityCountSpecification = new IfcQuantityCountSpecification();
}
