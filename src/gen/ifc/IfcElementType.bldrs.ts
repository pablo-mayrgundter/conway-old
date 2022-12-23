
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementtype.htm
 */
export default class IfcElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcElementTypeSpecification = IfcElementTypeSpecification.instance;

    constructor( public readonly ElementType : IfcLabel  | undefined ) {}
}

export class IfcElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ElementType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementTypeSpecification = new IfcElementTypeSpecification();
}
