
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMaterialLayer from "./IfcMaterialLayer.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm
 */
export default class IfcMaterialLayerSet implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMaterialLayerSet';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMaterialLayerSetSpecification = IfcMaterialLayerSetSpecification.instance;

    constructor( public readonly MaterialLayers : Array<IfcMaterialLayer> , public readonly LayerSetName : IfcLabel  | undefined ) {}
}

export class IfcMaterialLayerSetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMaterialLayerSet';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MaterialLayers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcMaterialLayer>'
		}, 
		{
			name: 'LayerSetName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMaterialLayerSetSpecification = new IfcMaterialLayerSetSpecification();
}
