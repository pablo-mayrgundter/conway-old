
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcReal from "./IfcReal.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm
 */
export default class IfcLightSourcePositional implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSourcePositional';

    public readonly __version__: number = 0;

    constructor( public readonly Position : IfcCartesianPoint , public readonly Radius : IfcPositiveLengthMeasure , public readonly ConstantAttenuation : IfcReal , public readonly DistanceAttenuation : IfcReal , public readonly QuadricAttenuation : IfcReal  ) {}
}

export class IfcLightSourcePositionalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourcePositional';

    public readonly required: string[] = [ 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'ConstantAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}, 
		{
			name: 'DistanceAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}, 
		{
			name: 'QuadricAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}
    ];
}