
import IfcAnnotationCurveOccurrence from "./IfcAnnotationCurveOccurrence.bldrs"
import IfcAnnotationTextOccurrence from "./IfcAnnotationTextOccurrence.bldrs"
import IfcAnnotationSymbolOccurrence from "./IfcAnnotationSymbolOccurrence.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingcalloutelement.htm
 */

export default class IfcDraughtingCalloutElement
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcDraughtingCalloutElementVariant ) {}
}

export type IfcDraughtingCalloutElementType = 'IfcAnnotationCurveOccurrence'|'IfcAnnotationTextOccurrence'|'IfcAnnotationSymbolOccurrence';

export type IfcDraughtingCalloutElementChoices = IfcAnnotationCurveOccurrence|IfcAnnotationTextOccurrence|IfcAnnotationSymbolOccurrence;

export type IfcDraughtingCalloutElementVariant = ({ type: 'IfcAnnotationCurveOccurrence'; value: IfcAnnotationCurveOccurrence }|{ type: 'IfcAnnotationTextOccurrence'; value: IfcAnnotationTextOccurrence }|{ type: 'IfcAnnotationSymbolOccurrence'; value: IfcAnnotationSymbolOccurrence }) & { type: IfcDraughtingCalloutElementType; value: IfcDraughtingCalloutElementChoices };

