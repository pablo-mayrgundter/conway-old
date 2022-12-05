
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundededgefeature.htm
 */
export default class IfcRoundedEdgeFeature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoundedEdgeFeature';

    public readonly __version__: number = 0;

    constructor( public readonly Radius : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcRoundedEdgeFeatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoundedEdgeFeature';

    public readonly required: string[] = [ 'IfcEdgeFeature', 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
