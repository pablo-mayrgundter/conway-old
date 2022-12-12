
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelaxation.htm
 */
export default class IfcRelaxation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelaxation';

    public readonly __version__: number = 0;

    constructor( public readonly RelaxationValue : IfcNormalisedRatioMeasure , public readonly InitialStress : IfcNormalisedRatioMeasure  ) {}
}

export class IfcRelaxationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelaxation';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelaxationValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'InitialStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}
    ];
}