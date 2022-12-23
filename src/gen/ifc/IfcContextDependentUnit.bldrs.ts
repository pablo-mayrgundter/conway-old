
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm
 */
export default class IfcContextDependentUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcContextDependentUnit';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcContextDependentUnitSpecification = IfcContextDependentUnitSpecification.instance;

    constructor( public readonly Name : IfcLabel  ) {}
}

export class IfcContextDependentUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcContextDependentUnit';

    public readonly required: ReadonlyArray< string > = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcContextDependentUnitSpecification = new IfcContextDependentUnitSpecification();
}
