
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSpace} from "./IfcSpace.bldrs"
import {IfcElement} from "./IfcElement.bldrs"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.bldrs"
import {IfcPhysicalOrVirtualEnum} from "./IfcPhysicalOrVirtualEnum.bldrs"
import {IfcInternalOrExternalEnum} from "./IfcInternalOrExternalEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm
 */
export default class IfcRelSpaceBoundary implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelSpaceBoundary';

    public readonly __version__: number = 0;

	RelatingSpace : IfcSpace;
	RelatedBuildingElement? : IfcElement;
	ConnectionGeometry? : IfcConnectionGeometry;
	PhysicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum;
	InternalOrExternalBoundary : IfcInternalOrExternalEnum;

}

export class IfcRelSpaceBoundarySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelSpaceBoundary';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpace'
		}, 
		{
			name: 'RelatedBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'ConnectionGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry'
		}, 
		{
			name: 'PhysicalOrVirtualBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPhysicalOrVirtualEnum'
		}, 
		{
			name: 'InternalOrExternalBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInternalOrExternalEnum'
		}
    ];
}
