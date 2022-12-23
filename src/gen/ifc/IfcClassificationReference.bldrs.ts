
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassification from "./IfcClassification.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm
 */
export default class IfcClassificationReference implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationReference';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationReferenceSpecification = IfcClassificationReferenceSpecification.instance;

    constructor( public readonly ReferencedSource : IfcClassification  | undefined ) {}
}

export class IfcClassificationReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationReference';

    public readonly required: ReadonlyArray< string > = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ReferencedSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassification'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationReferenceSpecification = new IfcClassificationReferenceSpecification();
}
