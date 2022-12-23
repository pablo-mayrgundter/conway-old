
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm
 */
export default class IfcProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProfileProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProfilePropertiesSpecification = IfcProfilePropertiesSpecification.instance;

    constructor( public readonly ProfileName : IfcLabel  | undefined, public readonly ProfileDefinition : IfcProfileDef  | undefined ) {}
}

export class IfcProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileProperties';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ProfileDefinition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProfilePropertiesSpecification = new IfcProfilePropertiesSpecification();
}
