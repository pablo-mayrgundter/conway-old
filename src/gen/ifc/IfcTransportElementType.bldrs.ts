
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTransportElementTypeEnum from "./IfcTransportElementTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctransportelementtype.htm
 */
export default class IfcTransportElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTransportElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTransportElementTypeSpecification = IfcTransportElementTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcTransportElementTypeEnum  ) {}
}

export class IfcTransportElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTransportElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransportElementTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTransportElementTypeSpecification = new IfcTransportElementTypeSpecification();
}
