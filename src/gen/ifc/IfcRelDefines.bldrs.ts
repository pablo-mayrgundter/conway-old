
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObject from "./IfcObject.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefines.htm
 */
export default class IfcRelDefines implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelDefines';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelDefinesSpecification = IfcRelDefinesSpecification.instance;

    constructor( public readonly RelatedObjects : Array<IfcObject>  ) {}
}

export class IfcRelDefinesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelDefines';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcObject>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelDefinesSpecification = new IfcRelDefinesSpecification();
}
