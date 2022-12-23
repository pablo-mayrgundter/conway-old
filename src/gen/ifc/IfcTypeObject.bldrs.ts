
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"
import IfcRelDefinesByType from "./IfcRelDefinesByType.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeobject.htm
 */
export default class IfcTypeObject implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTypeObject';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTypeObjectSpecification = IfcTypeObjectSpecification.instance;

    constructor( public readonly ApplicableOccurrence : IfcLabel  | undefined, public readonly HasPropertySets : Array<IfcPropertySetDefinition>  | undefined ) {}
}

export class IfcTypeObjectSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTypeObject';

    public readonly required: ReadonlyArray< string > = [ 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicableOccurrence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'HasPropertySets',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPropertySetDefinition>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTypeObjectSpecification = new IfcTypeObjectSpecification();
}
