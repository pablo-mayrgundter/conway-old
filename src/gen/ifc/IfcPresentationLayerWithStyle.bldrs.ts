
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerwithstyle.htm
 */
export default class IfcPresentationLayerWithStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPresentationLayerWithStyle';

    public readonly __version__: number = 0;

    constructor( public readonly LayerOn : boolean , public readonly LayerFrozen : boolean , public readonly LayerBlocked : boolean , public readonly LayerStyles : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>  ) {}
}

export class IfcPresentationLayerWithStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationLayerWithStyle';

    public readonly required: string[] = [ 'IfcPresentationLayerAssignment' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LayerOn',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'LayerFrozen',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'LayerBlocked',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'LayerStyles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>'
		}
    ];
}
