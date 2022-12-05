
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcServiceLifeTypeEnum from "./IfcServiceLifeTypeEnum.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcservicelife.htm
 */
export default class IfcServiceLife implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcServiceLife';

    public readonly __version__: number = 0;

    constructor( public readonly ServiceLifeType : IfcServiceLifeTypeEnum , public readonly ServiceLifeDuration : IfcTimeMeasure  ) {}
}

export class IfcServiceLifeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcServiceLife';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ServiceLifeType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcServiceLifeTypeEnum'
		}, 
		{
			name: 'ServiceLifeDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}
    ];
}
