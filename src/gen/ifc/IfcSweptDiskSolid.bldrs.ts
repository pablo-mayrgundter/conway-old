
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCurve} from "./IfcCurve.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcParameterValue} from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
 */
export default class IfcSweptDiskSolid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSweptDiskSolid';

    public readonly __version__: number = 0;

	Directrix : IfcCurve;
	Radius : IfcPositiveLengthMeasure;
	InnerRadius? : IfcPositiveLengthMeasure;
	StartParam : IfcParameterValue;
	EndParam : IfcParameterValue;

}

export class IfcSweptDiskSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptDiskSolid';

    public readonly required: string[] = [ 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Directrix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'InnerRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'StartParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}, 
		{
			name: 'EndParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue'
		}
    ];
}
