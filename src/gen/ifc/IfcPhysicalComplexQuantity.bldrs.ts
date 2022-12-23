
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
 */
export default class IfcPhysicalComplexQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPhysicalComplexQuantity';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPhysicalComplexQuantitySpecification = IfcPhysicalComplexQuantitySpecification.instance;

    constructor( public readonly HasQuantities : Array<IfcPhysicalQuantity> , public readonly Discrimination : IfcLabel , public readonly Quality : IfcLabel  | undefined, public readonly Usage : IfcLabel  | undefined ) {}
}

export class IfcPhysicalComplexQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalComplexQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HasQuantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>'
		}, 
		{
			name: 'Discrimination',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Quality',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Usage',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPhysicalComplexQuantitySpecification = new IfcPhysicalComplexQuantitySpecification();
}
