
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileTypeEnum from "./IfcProfileTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
 */
export default class IfcProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProfileDefSpecification = IfcProfileDefSpecification.instance;

    constructor( public readonly ProfileType : IfcProfileTypeEnum , public readonly ProfileName : IfcLabel  | undefined ) {}
}

export class IfcProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileDef';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProfileType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileTypeEnum'
		}, 
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProfileDefSpecification = new IfcProfileDefSpecification();
}
