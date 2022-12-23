
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTypeObject from "./IfcTypeObject.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytype.htm
 */
export default class IfcRelDefinesByType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelDefinesByType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelDefinesByTypeSpecification = IfcRelDefinesByTypeSpecification.instance;

    constructor( public readonly RelatingType : IfcTypeObject  ) {}
}

export class IfcRelDefinesByTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDefinesByType';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelDefines', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTypeObject'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDefinesByTypeSpecification = new IfcRelDefinesByTypeSpecification();
}
