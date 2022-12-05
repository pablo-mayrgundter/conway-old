
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMaterialLayerSet from "./IfcMaterialLayerSet.bldrs"
import IfcLayerSetDirectionEnum from "./IfcLayerSetDirectionEnum.bldrs"
import IfcDirectionSenseEnum from "./IfcDirectionSenseEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayersetusage.htm
 */
export default class IfcMaterialLayerSetUsage implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialLayerSetUsage';

    public readonly __version__: number = 0;

    constructor( public readonly ForLayerSet : IfcMaterialLayerSet , public readonly LayerSetDirection : IfcLayerSetDirectionEnum , public readonly DirectionSense : IfcDirectionSenseEnum , public readonly OffsetFromReferenceLine : IfcLengthMeasure  ) {}
}

export class IfcMaterialLayerSetUsageSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialLayerSetUsage';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ForLayerSet',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMaterialLayerSet'
		}, 
		{
			name: 'LayerSetDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLayerSetDirectionEnum'
		}, 
		{
			name: 'DirectionSense',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirectionSenseEnum'
		}, 
		{
			name: 'OffsetFromReferenceLine',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
