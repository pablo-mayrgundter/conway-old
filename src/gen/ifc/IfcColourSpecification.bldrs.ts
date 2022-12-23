
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourspecification.htm
 */
export default class IfcColourSpecification implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcColourSpecification';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcColourSpecificationSpecification = IfcColourSpecificationSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined ) {}
}

export class IfcColourSpecificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColourSpecification';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

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

    public static readonly instance: IfcColourSpecificationSpecification = new IfcColourSpecificationSpecification();
}
