
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSurface} from "./IfcSurface.bldrs"
import {IfcParameterValue} from "./IfcParameterValue.bldrs"
import {IfcDimensionCount} from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
 */
export default class IfcRectangularTrimmedSurface implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRectangularTrimmedSurface';

    public readonly __version__: number = 0;

	BasisSurface : IfcSurface;
	U1 : IfcParameterValue;
	V1 : IfcParameterValue;
	U2 : IfcParameterValue;
	V2 : IfcParameterValue;
	Usense : boolean;
	Vsense : boolean;

}

export class IfcRectangularTrimmedSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangularTrimmedSurface';

    public readonly required: string[] = [ 'IfcBoundedSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'U1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'V1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'U2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'V2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'Usense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Vsense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];
}
