
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesdocument.htm
 */
export default class IfcRelAssociatesDocument implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesDocument';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesDocumentSpecification = IfcRelAssociatesDocumentSpecification.instance;

    constructor( public readonly RelatingDocument : IfcDocumentReference|IfcDocumentInformation  ) {}
}

export class IfcRelAssociatesDocumentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesDocument';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentReference|IfcDocumentInformation'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesDocumentSpecification = new IfcRelAssociatesDocumentSpecification();
}
