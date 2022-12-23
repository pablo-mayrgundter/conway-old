
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcchamferedgefeature.htm
 */
export default class IfcChamferEdgeFeature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcChamferEdgeFeature';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcChamferEdgeFeatureSpecification = IfcChamferEdgeFeatureSpecification.instance;

    constructor( public readonly Width : IfcPositiveLengthMeasure  | undefined, public readonly Height : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcChamferEdgeFeatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcChamferEdgeFeature';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdgeFeature', 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Width',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcChamferEdgeFeatureSpecification = new IfcChamferEdgeFeatureSpecification();
}
