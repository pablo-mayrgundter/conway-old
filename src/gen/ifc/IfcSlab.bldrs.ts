
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSlabTypeEnum from "./IfcSlabTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslab.htm
 */
export default class IfcSlab implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSlab';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcSlabSpecification = IfcSlabSpecification.instance;

    constructor( public readonly PredefinedType : IfcSlabTypeEnum  | undefined ) {}
}

export class IfcSlabSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSlab';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

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

    public static readonly instance: IfcSlabSpecification = new IfcSlabSpecification();
}
