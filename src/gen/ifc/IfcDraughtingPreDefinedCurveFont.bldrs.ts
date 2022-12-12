
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcurvefont.htm
 */
export default class IfcDraughtingPreDefinedCurveFont implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDraughtingPreDefinedCurveFont';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcDraughtingPreDefinedCurveFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDraughtingPreDefinedCurveFont';

    public readonly required: string[] = [ 'IfcPreDefinedCurveFont', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}