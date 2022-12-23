
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelAssignsToProjectOrder from "./IfcRelAssignsToProjectOrder.bldrs"
import IfcProjectOrderRecordTypeEnum from "./IfcProjectOrderRecordTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectorderrecord.htm
 */
export default class IfcProjectOrderRecord implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProjectOrderRecord';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProjectOrderRecordSpecification = IfcProjectOrderRecordSpecification.instance;

    constructor( public readonly Records : Array<IfcRelAssignsToProjectOrder> , public readonly PredefinedType : IfcProjectOrderRecordTypeEnum  ) {}
}

export class IfcProjectOrderRecordSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectOrderRecord';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Records',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRelAssignsToProjectOrder>'
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectOrderRecordTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProjectOrderRecordSpecification = new IfcProjectOrderRecordSpecification();
}
