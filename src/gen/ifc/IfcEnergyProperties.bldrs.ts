
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEnergySequenceEnum from "./IfcEnergySequenceEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcenergyproperties.htm
 */
export default class IfcEnergyProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcEnergyProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcEnergyPropertiesSpecification = IfcEnergyPropertiesSpecification.instance;

    constructor( public readonly EnergySequence : IfcEnergySequenceEnum  | undefined, public readonly UserDefinedEnergySequence : IfcLabel  | undefined ) {}
}

export class IfcEnergyPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEnergyProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EnergySequence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEnergySequenceEnum'
		}, 
		{
			name: 'UserDefinedEnergySequence',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEnergyPropertiesSpecification = new IfcEnergyPropertiesSpecification();
}
