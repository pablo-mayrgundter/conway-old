
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSIPrefix from "./IfcSIPrefix.bldrs"
import IfcSIUnitName from "./IfcSIUnitName.bldrs"
import IfcDimensionalExponents from "./IfcDimensionalExponents.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsiunit.htm
 */
export default class IfcSIUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSIUnit';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSIUnitSpecification = IfcSIUnitSpecification.instance;

    constructor( public readonly Prefix : IfcSIPrefix  | undefined, public readonly Name : IfcSIUnitName  ) {}
}

export class IfcSIUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSIUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Prefix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSIPrefix'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSIUnitName'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSIUnitSpecification = new IfcSIUnitSpecification();
}
