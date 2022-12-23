
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSlabTypeEnum from "./IfcSlabTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslabtype.htm
 */
export default class IfcSlabType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSlabType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSlabTypeSpecification = IfcSlabTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcSlabTypeEnum  ) {}
}

export class IfcSlabTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlabType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSlabTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSlabTypeSpecification = new IfcSlabTypeSpecification();
}
