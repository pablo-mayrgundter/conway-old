
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm
 */
export default class IfcConnectionPointEccentricity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConnectionPointEccentricity';

    public readonly __version__: number = 0;

    constructor( public readonly EccentricityInX : IfcLengthMeasure  | undefined, public readonly EccentricityInY : IfcLengthMeasure  | undefined, public readonly EccentricityInZ : IfcLengthMeasure  | undefined ) {}
}

export class IfcConnectionPointEccentricitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPointEccentricity';

    public readonly required: string[] = [ 'IfcConnectionPointGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'EccentricityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'EccentricityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'EccentricityInZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
