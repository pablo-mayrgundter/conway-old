
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcTimeMeasure} from "./IfcTimeMeasure.bldrs"
import {IfcTimeSeriesValue} from "./IfcTimeSeriesValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm
 */
export default class IfcRegularTimeSeries implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRegularTimeSeries';

    public readonly __version__: number = 0;

	TimeStep : IfcTimeMeasure;
	Values : Array<IfcTimeSeriesValue>;

}

export class IfcRegularTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRegularTimeSeries';

    public readonly required: string[] = [ 'IfcTimeSeries' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TimeStep',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'Values',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTimeSeriesValue>'
		}
    ];
}
