
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoor.htm
 */
export default class IfcDoor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDoor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDoorSpecification = IfcDoorSpecification.instance;

    constructor( public readonly OverallHeight : IfcPositiveLengthMeasure  | undefined, public readonly OverallWidth : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcDoorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoor';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OverallHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'OverallWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDoorSpecification = new IfcDoorSpecification();
}
