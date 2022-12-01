
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProfileProperties} from "./IfcProfileProperties.bldrs"
import {IfcShapeAspect} from "./IfcShapeAspect.bldrs"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesprofileproperties.htm
 */
export default class IfcRelAssociatesProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssociatesProfileProperties';

    public readonly __version__: number = 0;

	RelatingProfileProperties : IfcProfileProperties;
	ProfileSectionLocation? : IfcShapeAspect;
	ProfileOrientation? : IfcPlaneAngleMeasure|IfcDirection;

}

export class IfcRelAssociatesProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesProfileProperties';

    public readonly required: string[] = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingProfileProperties',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileProperties'
		}, 
		{
			name: 'ProfileSectionLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcShapeAspect'
		}, 
		{
			name: 'ProfileOrientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure|IfcDirection'
		}
    ];
}
