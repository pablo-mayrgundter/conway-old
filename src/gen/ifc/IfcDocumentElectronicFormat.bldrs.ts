
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentelectronicformat.htm
 */
export default class IfcDocumentElectronicFormat implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDocumentElectronicFormat';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDocumentElectronicFormatSpecification = IfcDocumentElectronicFormatSpecification.instance;

    constructor( public readonly FileExtension : IfcLabel  | undefined, public readonly MimeContentType : IfcLabel  | undefined, public readonly MimeSubtype : IfcLabel  | undefined ) {}
}

export class IfcDocumentElectronicFormatSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentElectronicFormat';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FileExtension',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'MimeContentType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'MimeSubtype',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDocumentElectronicFormatSpecification = new IfcDocumentElectronicFormatSpecification();
}
