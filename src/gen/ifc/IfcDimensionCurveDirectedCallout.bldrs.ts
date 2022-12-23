
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensioncurvedirectedcallout.htm
 */
export default class IfcDimensionCurveDirectedCallout implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDimensionCurveDirectedCallout';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDimensionCurveDirectedCalloutSpecification = IfcDimensionCurveDirectedCalloutSpecification.instance;

    constructor(  ) {}
}

export class IfcDimensionCurveDirectedCalloutSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDimensionCurveDirectedCallout';

    public readonly required: ReadonlyArray< string > = [ 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDimensionCurveDirectedCalloutSpecification = new IfcDimensionCurveDirectedCalloutSpecification();
}
