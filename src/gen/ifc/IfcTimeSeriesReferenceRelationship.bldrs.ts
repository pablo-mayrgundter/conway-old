
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesreferencerelationship.htm
 */
export default class IfcTimeSeriesReferenceRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTimeSeriesReferenceRelationship';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTimeSeriesReferenceRelationshipSpecification = IfcTimeSeriesReferenceRelationshipSpecification.instance;

    constructor( public readonly ReferencedTimeSeries : IfcTimeSeries , public readonly TimeSeriesReferences : Array<IfcDocumentReference|IfcDocumentInformation>  ) {}
}

export class IfcTimeSeriesReferenceRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeriesReferenceRelationship';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ReferencedTimeSeries',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries'
		}, 
		{
			name: 'TimeSeriesReferences',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentReference|IfcDocumentInformation>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTimeSeriesReferenceRelationshipSpecification = new IfcTimeSeriesReferenceRelationshipSpecification();
}
