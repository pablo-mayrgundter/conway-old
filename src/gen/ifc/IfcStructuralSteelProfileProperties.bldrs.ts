
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsteelprofileproperties.htm
 */
export default class IfcStructuralSteelProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralSteelProfileProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralSteelProfilePropertiesSpecification = IfcStructuralSteelProfilePropertiesSpecification.instance;

    constructor( public readonly ShearAreaZ : IfcAreaMeasure  | undefined, public readonly ShearAreaY : IfcAreaMeasure  | undefined, public readonly PlasticShapeFactorY : IfcPositiveRatioMeasure  | undefined, public readonly PlasticShapeFactorZ : IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcStructuralSteelProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralSteelProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralProfileProperties', 'IfcGeneralProfileProperties', 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ShearAreaZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'ShearAreaY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'PlasticShapeFactorY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'PlasticShapeFactorZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralSteelProfilePropertiesSpecification = new IfcStructuralSteelProfilePropertiesSpecification();
}
