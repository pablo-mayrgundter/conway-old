
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotation from "./IfcClassificationNotation.bldrs"
import IfcClassificationReference from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm
 */
export default class IfcRelAssociatesClassification implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesClassification';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssociatesClassificationSpecification = IfcRelAssociatesClassificationSpecification.instance;

    constructor( public readonly RelatingClassification : IfcClassificationNotation|IfcClassificationReference  ) {}
}

export class IfcRelAssociatesClassificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesClassification';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingClassification',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationNotation|IfcClassificationReference'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesClassificationSpecification = new IfcRelAssociatesClassificationSpecification();
}
