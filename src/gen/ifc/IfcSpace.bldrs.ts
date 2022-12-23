
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcInternalOrExternalEnum from "./IfcInternalOrExternalEnum.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcRelCoversSpaces from "./IfcRelCoversSpaces.bldrs"
import IfcRelSpaceBoundary from "./IfcRelSpaceBoundary.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspace.htm
 */
export default class IfcSpace implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSpace';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSpaceSpecification = IfcSpaceSpecification.instance;

    constructor( public readonly InteriorOrExteriorSpace : IfcInternalOrExternalEnum , public readonly ElevationWithFlooring : IfcLengthMeasure  | undefined ) {}
}

export class IfcSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpace';

    public readonly required: ReadonlyArray< string > = [ 'IfcSpatialStructureElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InteriorOrExteriorSpace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInternalOrExternalEnum'
		}, 
		{
			name: 'ElevationWithFlooring',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceSpecification = new IfcSpaceSpecification();
}
