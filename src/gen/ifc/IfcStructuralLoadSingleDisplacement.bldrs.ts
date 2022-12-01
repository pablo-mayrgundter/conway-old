
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm
 */
export default class IfcStructuralLoadSingleDisplacement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadSingleDisplacement';

    public readonly __version__: number = 0;

	DisplacementX? : IfcLengthMeasure;
	DisplacementY? : IfcLengthMeasure;
	DisplacementZ? : IfcLengthMeasure;
	RotationalDisplacementRX? : IfcPlaneAngleMeasure;
	RotationalDisplacementRY? : IfcPlaneAngleMeasure;
	RotationalDisplacementRZ? : IfcPlaneAngleMeasure;

}

export class IfcStructuralLoadSingleDisplacementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadSingleDisplacement';

    public readonly required: string[] = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DisplacementX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'DisplacementY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'DisplacementZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'RotationalDisplacementRX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'RotationalDisplacementRY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'RotationalDisplacementRZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}
    ];
}
