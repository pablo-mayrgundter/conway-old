
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcRelAssignsToProjectOrder} from "./IfcRelAssignsToProjectOrder.bldrs"
import {IfcProjectOrderRecordTypeEnum} from "./IfcProjectOrderRecordTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectorderrecord.htm
 */
export default class IfcProjectOrderRecord implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProjectOrderRecord';

    public readonly __version__: number = 0;

	Records : Array<IfcRelAssignsToProjectOrder>;
	PredefinedType : IfcProjectOrderRecordTypeEnum;

}

export class IfcProjectOrderRecordSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectOrderRecord';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
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
}
