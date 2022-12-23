
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAddressTypeEnum from "./IfcAddressTypeEnum.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm
 */
export default class IfcAddress implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAddress';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAddressSpecification = IfcAddressSpecification.instance;

    constructor( public readonly Purpose : IfcAddressTypeEnum  | undefined, public readonly Description : IfcText  | undefined, public readonly UserDefinedPurpose : IfcLabel  | undefined ) {}
}

export class IfcAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAddress';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAddressTypeEnum'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'UserDefinedPurpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAddressSpecification = new IfcAddressSpecification();
}
