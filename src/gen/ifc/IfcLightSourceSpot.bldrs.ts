
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDirection} from "./IfcDirection.bldrs"
import {IfcReal} from "./IfcReal.bldrs"
import {IfcPositivePlaneAngleMeasure} from "./IfcPositivePlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm
 */
export default class IfcLightSourceSpot implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLightSourceSpot';

    public readonly __version__: number = 0;

	Orientation : IfcDirection;
	ConcentrationExponent? : IfcReal;
	SpreadAngle : IfcPositivePlaneAngleMeasure;
	BeamWidthAngle : IfcPositivePlaneAngleMeasure;

}

export class IfcLightSourceSpotSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceSpot';

    public readonly required: string[] = [ 'IfcLightSourcePositional', 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection'
		}, 
		{
			name: 'ConcentrationExponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal'
		}, 
		{
			name: 'SpreadAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositivePlaneAngleMeasure'
		}, 
		{
			name: 'BeamWidthAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositivePlaneAngleMeasure'
		}
    ];
}
