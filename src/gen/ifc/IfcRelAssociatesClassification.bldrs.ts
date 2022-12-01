
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcClassificationNotation} from "./IfcClassificationNotation.bldrs"
import {IfcClassificationReference} from "./IfcClassificationReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm
 */
export default class IfcRelAssociatesClassification implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesClassification';

    public readonly __version__: number = 0;

	RelatingClassification : IfcClassificationNotation|IfcClassificationReference;

}

export class IfcRelAssociatesClassificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesClassification';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingClassification',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationNotation|IfcClassificationReference'
		}
    ];
}
