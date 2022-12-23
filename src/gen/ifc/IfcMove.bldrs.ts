
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpatialStructureElement from "./IfcSpatialStructureElement.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmove.htm
 */
export default class IfcMove implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMove';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMoveSpecification = IfcMoveSpecification.instance;

    constructor( public readonly MoveFrom : IfcSpatialStructureElement , public readonly MoveTo : IfcSpatialStructureElement , public readonly PunchList : Array<IfcText>  | undefined ) {}
}

export class IfcMoveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMove';

    public readonly required: ReadonlyArray< string > = [ 'IfcTask', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MoveFrom',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement'
		}, 
		{
			name: 'MoveTo',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpatialStructureElement'
		}, 
		{
			name: 'PunchList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcText>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMoveSpecification = new IfcMoveSpecification();
}
