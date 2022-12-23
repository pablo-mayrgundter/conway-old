
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm
 */
export default class IfcStructuralLoadTemperature implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStructuralLoadTemperature';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStructuralLoadTemperatureSpecification = IfcStructuralLoadTemperatureSpecification.instance;

    constructor( public readonly DeltaT_Constant : IfcThermodynamicTemperatureMeasure  | undefined, public readonly DeltaT_Y : IfcThermodynamicTemperatureMeasure  | undefined, public readonly DeltaT_Z : IfcThermodynamicTemperatureMeasure  | undefined ) {}
}

export class IfcStructuralLoadTemperatureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLoadTemperature';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLoadStatic', 'IfcStructuralLoad' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DeltaT_Constant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'DeltaT_Y',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'DeltaT_Z',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLoadTemperatureSpecification = new IfcStructuralLoadTemperatureSpecification();
}
