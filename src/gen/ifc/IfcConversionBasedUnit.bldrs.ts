
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm
 */
export default class IfcConversionBasedUnit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcConversionBasedUnit';

    public readonly __version__: number = 0;

	Name : IfcLabel;
	ConversionFactor : IfcMeasureWithUnit;

}

export class IfcConversionBasedUnitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConversionBasedUnit';

    public readonly required: string[] = [ 'IfcNamedUnit' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ConversionFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit'
		}
    ];
}
