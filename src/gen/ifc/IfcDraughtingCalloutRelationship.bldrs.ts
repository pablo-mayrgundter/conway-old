
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcDraughtingCallout from "./IfcDraughtingCallout.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcalloutrelationship.htm
 */
export default class IfcDraughtingCalloutRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingCalloutRelationship';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly Description : IfcText  | undefined, public readonly RelatingDraughtingCallout : IfcDraughtingCallout , public readonly RelatedDraughtingCallout : IfcDraughtingCallout  ) {}
}

export class IfcDraughtingCalloutRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingCalloutRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'RelatingDraughtingCallout',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDraughtingCallout'
		}, 
		{
			name: 'RelatedDraughtingCallout',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDraughtingCallout'
		}
    ];
}
