
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotationFacet from "./IfcClassificationNotationFacet.bldrs"
import IfcClassification from "./IfcClassification.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcClassificationItemRelationship from "./IfcClassificationItemRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationitem.htm
 */
export default class IfcClassificationItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationItem';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationItemSpecification = IfcClassificationItemSpecification.instance;

    constructor( public readonly Notation : IfcClassificationNotationFacet , public readonly ItemOf : IfcClassification  | undefined, public readonly Title : IfcLabel  ) {}
}

export class IfcClassificationItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationItem';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Notation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationNotationFacet'
		}, 
		{
			name: 'ItemOf',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassification'
		}, 
		{
			name: 'Title',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationItemSpecification = new IfcClassificationItemSpecification();
}
