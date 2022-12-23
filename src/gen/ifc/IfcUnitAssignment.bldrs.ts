
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
 */
export default class IfcUnitAssignment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcUnitAssignment';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcUnitAssignmentSpecification = IfcUnitAssignmentSpecification.instance;

    constructor( public readonly Units : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>  ) {}
}

export class IfcUnitAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcUnitAssignment';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Units',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcUnitAssignmentSpecification = new IfcUnitAssignmentSpecification();
}
