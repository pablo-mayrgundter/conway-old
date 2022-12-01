
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.bldrs"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.bldrs"
import {IfcRepresentation} from "./IfcRepresentation.bldrs"
import {IfcMappedItem} from "./IfcMappedItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm
 */
export default class IfcRepresentationMap implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRepresentationMap';

    public readonly __version__: number = 0;

	MappingOrigin : IfcAxis2Placement2D|IfcAxis2Placement3D;
	MappedRepresentation : IfcRepresentation;

}

export class IfcRepresentationMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentationMap';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MappingOrigin',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D'
		}, 
		{
			name: 'MappedRepresentation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentation'
		}
    ];
}
