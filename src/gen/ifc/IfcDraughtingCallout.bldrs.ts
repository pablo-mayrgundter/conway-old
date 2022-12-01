
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAnnotationCurveOccurrence} from "./IfcAnnotationCurveOccurrence.bldrs"
import {IfcAnnotationTextOccurrence} from "./IfcAnnotationTextOccurrence.bldrs"
import {IfcAnnotationSymbolOccurrence} from "./IfcAnnotationSymbolOccurrence.bldrs"
import {IfcDraughtingCalloutRelationship} from "./IfcDraughtingCalloutRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcallout.htm
 */
export default class IfcDraughtingCallout implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingCallout';

    public readonly __version__: number = 0;

	Contents : Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>;

}

export class IfcDraughtingCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingCallout';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Contents',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence>'
		}
    ];
}
