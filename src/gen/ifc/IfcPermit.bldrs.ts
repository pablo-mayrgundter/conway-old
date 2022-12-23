
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpermit.htm
 */
export default class IfcPermit implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPermit';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcPermitSpecification = IfcPermitSpecification.instance;

    constructor( public readonly PermitID : IfcIdentifier  ) {}
}

export class IfcPermitSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPermit';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PermitID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPermitSpecification = new IfcPermitSpecification();
}
