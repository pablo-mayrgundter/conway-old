
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStairFlightTypeEnum from "./IfcStairFlightTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstairflighttype.htm
 */
export default class IfcStairFlightType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStairFlightType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStairFlightTypeSpecification = IfcStairFlightTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcStairFlightTypeEnum  ) {}
}

export class IfcStairFlightTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStairFlightType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStairFlightTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStairFlightTypeSpecification = new IfcStairFlightTypeSpecification();
}
