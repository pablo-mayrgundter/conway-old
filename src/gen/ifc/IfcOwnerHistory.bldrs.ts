
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.bldrs"
import {IfcApplication} from "./IfcApplication.bldrs"
import {IfcStateEnum} from "./IfcStateEnum.bldrs"
import {IfcChangeActionEnum} from "./IfcChangeActionEnum.bldrs"
import {IfcTimeStamp} from "./IfcTimeStamp.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm
 */
export default class IfcOwnerHistory implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcOwnerHistory';

    public readonly __version__: number = 0;

	OwningUser : IfcPersonAndOrganization;
	OwningApplication : IfcApplication;
	State? : IfcStateEnum;
	ChangeAction : IfcChangeActionEnum;
	LastModifiedDate? : IfcTimeStamp;
	LastModifyingUser? : IfcPersonAndOrganization;
	LastModifyingApplication? : IfcApplication;
	CreationDate : IfcTimeStamp;

}

export class IfcOwnerHistorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOwnerHistory';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OwningUser',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPersonAndOrganization'
		}, 
		{
			name: 'OwningApplication',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApplication'
		}, 
		{
			name: 'State',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStateEnum'
		}, 
		{
			name: 'ChangeAction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcChangeActionEnum'
		}, 
		{
			name: 'LastModifiedDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeStamp'
		}, 
		{
			name: 'LastModifyingUser',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPersonAndOrganization'
		}, 
		{
			name: 'LastModifyingApplication',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApplication'
		}, 
		{
			name: 'CreationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeStamp'
		}
    ];
}
