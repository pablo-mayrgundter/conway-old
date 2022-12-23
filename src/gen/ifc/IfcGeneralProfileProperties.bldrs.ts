
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMassPerLengthMeasure from "./IfcMassPerLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeneralprofileproperties.htm
 */
export default class IfcGeneralProfileProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGeneralProfileProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcGeneralProfilePropertiesSpecification = IfcGeneralProfilePropertiesSpecification.instance;

    constructor( public readonly PhysicalWeight : IfcMassPerLengthMeasure  | undefined, public readonly Perimeter : IfcPositiveLengthMeasure  | undefined, public readonly MinimumPlateThickness : IfcPositiveLengthMeasure  | undefined, public readonly MaximumPlateThickness : IfcPositiveLengthMeasure  | undefined, public readonly CrossSectionArea : IfcAreaMeasure  | undefined ) {}
}

export class IfcGeneralProfilePropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeneralProfileProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PhysicalWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassPerLengthMeasure'
		}, 
		{
			name: 'Perimeter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MinimumPlateThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MaximumPlateThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeneralProfilePropertiesSpecification = new IfcGeneralProfilePropertiesSpecification();
}
