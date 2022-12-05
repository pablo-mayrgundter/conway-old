
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgefeature.htm
 */
export default class IfcEdgeFeature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEdgeFeature';

    public readonly __version__: number = 0;

    constructor( public readonly FeatureLength : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcEdgeFeatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdgeFeature';

    public readonly required: string[] = [ 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'FeatureLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
