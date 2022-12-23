
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm
 */
export default class IfcElementQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementQuantity';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementQuantitySpecification = IfcElementQuantitySpecification.instance;

    constructor( public readonly MethodOfMeasurement : IfcLabel  | undefined, public readonly Quantities : Array<IfcPhysicalQuantity>  ) {}
}

export class IfcElementQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MethodOfMeasurement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Quantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementQuantitySpecification = new IfcElementQuantitySpecification();
}
