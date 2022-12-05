
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstairflight.htm
 */
export default class IfcStairFlight implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStairFlight';

    public readonly __version__: number = 0;

    constructor( public readonly NumberOfRiser : number  | undefined, public readonly NumberOfTreads : number  | undefined, public readonly RiserHeight : IfcPositiveLengthMeasure  | undefined, public readonly TreadLength : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcStairFlightSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStairFlight';

    public readonly required: string[] = [ 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'NumberOfRiser',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'NumberOfTreads',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'RiserHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TreadLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
