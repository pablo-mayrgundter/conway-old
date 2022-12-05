
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcLogical from "./IfcLogical.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm
 */
export default class IfcMaterialLayer implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialLayer';

    public readonly __version__: number = 0;

    constructor( public readonly Material : IfcMaterial  | undefined, public readonly LayerThickness : IfcPositiveLengthMeasure , public readonly IsVentilated : IfcLogical  | undefined ) {}
}

export class IfcMaterialLayerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialLayer';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Material',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterial'
		}, 
		{
			name: 'LayerThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'IsVentilated',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLogical'
		}
    ];
}
