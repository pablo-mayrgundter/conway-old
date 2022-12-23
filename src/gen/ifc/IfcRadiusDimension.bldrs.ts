
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcradiusdimension.htm
 */
export default class IfcRadiusDimension implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRadiusDimension';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRadiusDimensionSpecification = IfcRadiusDimensionSpecification.instance;

    constructor(  ) {}
}

export class IfcRadiusDimensionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRadiusDimension';

    public readonly required: ReadonlyArray< string > = [ 'IfcDimensionCurveDirectedCallout', 'IfcDraughtingCallout', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRadiusDimensionSpecification = new IfcRadiusDimensionSpecification();
}
