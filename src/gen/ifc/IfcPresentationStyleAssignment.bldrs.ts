
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcNullStyle from "./IfcNullStyle.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcSymbolStyle from "./IfcSymbolStyle.bldrs"
import IfcFillAreaStyle from "./IfcFillAreaStyle.bldrs"
import IfcTextStyle from "./IfcTextStyle.bldrs"
import IfcSurfaceStyle from "./IfcSurfaceStyle.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleassignment.htm
 */
export default class IfcPresentationStyleAssignment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPresentationStyleAssignment';

    public readonly __version__: number = 0;

    constructor( public readonly Styles : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>  ) {}
}

export class IfcPresentationStyleAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationStyleAssignment';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Styles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>'
		}
    ];
}
