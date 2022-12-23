
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIrregularTimeSeriesValue from "./IfcIrregularTimeSeriesValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseries.htm
 */
export default class IfcIrregularTimeSeries implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcIrregularTimeSeries';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcIrregularTimeSeriesSpecification = IfcIrregularTimeSeriesSpecification.instance;

    constructor( public readonly Values : Array<IfcIrregularTimeSeriesValue>  ) {}
}

export class IfcIrregularTimeSeriesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcIrregularTimeSeries';

    public readonly required: ReadonlyArray< string > = [ 'IfcTimeSeries' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Values',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcIrregularTimeSeriesValue>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcIrregularTimeSeriesSpecification = new IfcIrregularTimeSeriesSpecification();
}
