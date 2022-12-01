
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSurface} from "./IfcSurface.bldrs"
import {IfcParameterValue} from "./IfcParameterValue.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm
 */
export default class IfcPointOnSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPointOnSurface';

    public readonly __version__: number = 0;

	BasisSurface : IfcSurface;
	PointParameterU : IfcParameterValue;
	PointParameterV : IfcParameterValue;

}

export class IfcPointOnSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPointOnSurface';

    public readonly required: string[] = [ 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'BasisSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface'
		}, 
		{
			name: 'PointParameterU',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'PointParameterV',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}
    ];
}
