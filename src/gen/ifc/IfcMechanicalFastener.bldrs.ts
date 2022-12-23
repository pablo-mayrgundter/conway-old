
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastener.htm
 */
export default class IfcMechanicalFastener implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalFastener';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMechanicalFastenerSpecification = IfcMechanicalFastenerSpecification.instance;

    constructor( public readonly NominalDiameter : IfcPositiveLengthMeasure  | undefined, public readonly NominalLength : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcMechanicalFastenerSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalFastener';

    public readonly required: ReadonlyArray< string > = [ 'IfcFastener', 'IfcElementComponent', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'NominalLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalFastenerSpecification = new IfcMechanicalFastenerSpecification();
}
