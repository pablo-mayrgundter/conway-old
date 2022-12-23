
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"
import IfcAnnotationTextOccurrence from "./IfcAnnotationTextOccurrence.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"
import IfcDraughtingCalloutRelationship from "./IfcDraughtingCalloutRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcallout.htm
 */
export default class IfcDraughtingCallout implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingCallout';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDraughtingCalloutSpecification = IfcDraughtingCalloutSpecification.instance;

    constructor( public readonly Contents : Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>  ) {}
}

export class IfcDraughtingCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingCallout';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Contents',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDraughtingCalloutSpecification = new IfcDraughtingCalloutSpecification();
}
