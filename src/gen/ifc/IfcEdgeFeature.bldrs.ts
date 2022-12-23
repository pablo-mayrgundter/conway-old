
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgefeature.htm
 */
export default class IfcEdgeFeature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEdgeFeature';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEdgeFeatureSpecification = IfcEdgeFeatureSpecification.instance;

    constructor( public readonly FeatureLength : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcEdgeFeatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdgeFeature';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FeatureLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEdgeFeatureSpecification = new IfcEdgeFeatureSpecification();
}
