
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProcess from "./IfcProcess.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcSequenceEnum from "./IfcSequenceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm
 */
export default class IfcRelSequence implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelSequence';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelSequenceSpecification = IfcRelSequenceSpecification.instance;

    constructor( public readonly RelatingProcess : IfcProcess , public readonly RelatedProcess : IfcProcess , public readonly TimeLag : IfcTimeMeasure , public readonly SequenceType : IfcSequenceEnum  ) {}
}

export class IfcRelSequenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelSequence';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess'
		}, 
		{
			name: 'RelatedProcess',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProcess'
		}, 
		{
			name: 'TimeLag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'SequenceType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSequenceEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelSequenceSpecification = new IfcRelSequenceSpecification();
}
