
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm
 */
export default class IfcQuantityArea implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityArea';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcQuantityAreaSpecification = IfcQuantityAreaSpecification.instance;

    constructor( public readonly AreaValue : IfcAreaMeasure  ) {}
}

export class IfcQuantityAreaSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityArea';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AreaValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityAreaSpecification = new IfcQuantityAreaSpecification();
}
