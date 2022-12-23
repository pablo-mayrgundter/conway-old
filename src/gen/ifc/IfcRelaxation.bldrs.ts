
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelaxation.htm
 */
export default class IfcRelaxation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelaxation';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelaxationSpecification = IfcRelaxationSpecification.instance;

    constructor( public readonly RelaxationValue : IfcNormalisedRatioMeasure , public readonly InitialStress : IfcNormalisedRatioMeasure  ) {}
}

export class IfcRelaxationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelaxation';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelaxationSpecification = new IfcRelaxationSpecification();
}
