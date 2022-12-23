
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcServiceLifeTypeEnum from "./IfcServiceLifeTypeEnum.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcservicelife.htm
 */
export default class IfcServiceLife implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcServiceLife';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcServiceLifeSpecification = IfcServiceLifeSpecification.instance;

    constructor( public readonly ServiceLifeType : IfcServiceLifeTypeEnum , public readonly ServiceLifeDuration : IfcTimeMeasure  ) {}
}

export class IfcServiceLifeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcServiceLife';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcServiceLifeSpecification = new IfcServiceLifeSpecification();
}
