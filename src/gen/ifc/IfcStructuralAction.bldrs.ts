
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralReaction from "./IfcStructuralReaction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralaction.htm
 */
export default class IfcStructuralAction implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralAction';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralActionSpecification = IfcStructuralActionSpecification.instance;

    constructor( public readonly DestabilizingLoad : boolean , public readonly CausedBy : IfcStructuralReaction  | undefined ) {}
}

export class IfcStructuralActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DestabilizingLoad',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'CausedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralReaction'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralActionSpecification = new IfcStructuralActionSpecification();
}
