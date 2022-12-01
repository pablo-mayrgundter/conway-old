
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCompoundPlaneAngleMeasure} from "./IfcCompoundPlaneAngleMeasure.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcPostalAddress} from "./IfcPostalAddress.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsite.htm
 */
export default class IfcSite implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSite';

    public readonly __version__: number = 0;

	RefLatitude? : IfcCompoundPlaneAngleMeasure;
	RefLongitude? : IfcCompoundPlaneAngleMeasure;
	RefElevation? : IfcLengthMeasure;
	LandTitleNumber? : IfcLabel;
	SiteAddress? : IfcPostalAddress;

}

export class IfcSiteSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSite';

    public readonly required: string[] = [ 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RefLatitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompoundPlaneAngleMeasure'
		}, 
		{
			name: 'RefLongitude',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCompoundPlaneAngleMeasure'
		}, 
		{
			name: 'RefElevation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'LandTitleNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'SiteAddress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPostalAddress'
		}
    ];
}
