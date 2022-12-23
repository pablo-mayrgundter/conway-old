
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesappliedvalue.htm
 */
export default class IfcRelAssociatesAppliedValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesAppliedValue';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesAppliedValueSpecification = IfcRelAssociatesAppliedValueSpecification.instance;

    constructor( public readonly RelatingAppliedValue : IfcAppliedValue  ) {}
}

export class IfcRelAssociatesAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesAppliedValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingAppliedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAppliedValue'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesAppliedValueSpecification = new IfcRelAssociatesAppliedValueSpecification();
}
