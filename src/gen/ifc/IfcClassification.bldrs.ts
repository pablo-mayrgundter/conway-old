
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcClassificationItem from "./IfcClassificationItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm
 */
export default class IfcClassification implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassification';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcClassificationSpecification = IfcClassificationSpecification.instance;

    constructor( public readonly Source : IfcLabel , public readonly Edition : IfcLabel , public readonly EditionDate : IfcCalendarDate  | undefined, public readonly Name : IfcLabel  ) {}
}

export class IfcClassificationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassification';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Source',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Edition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'EditionDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationSpecification = new IfcClassificationSpecification();
}
