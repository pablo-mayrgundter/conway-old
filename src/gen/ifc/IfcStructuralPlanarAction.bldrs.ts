
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcProjectedOrTrueLengthEnum from "./IfcProjectedOrTrueLengthEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralplanaraction.htm
 */
export default class IfcStructuralPlanarAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralPlanarAction';

    public readonly __version__: number = 0;

    constructor( public readonly ProjectedOrTrue : IfcProjectedOrTrueLengthEnum  ) {}
}

export class IfcStructuralPlanarActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralPlanarAction';

    public readonly required: string[] = [ 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ProjectedOrTrue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectedOrTrueLengthEnum'
		}
    ];
}
