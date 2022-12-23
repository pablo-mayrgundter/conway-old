
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundededgefeature.htm
 */
export default class IfcRoundedEdgeFeature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRoundedEdgeFeature';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRoundedEdgeFeatureSpecification = IfcRoundedEdgeFeatureSpecification.instance;

    constructor( public readonly Radius : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcRoundedEdgeFeatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoundedEdgeFeature';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdgeFeature', 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRoundedEdgeFeatureSpecification = new IfcRoundedEdgeFeatureSpecification();
}
