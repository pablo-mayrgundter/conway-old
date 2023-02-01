
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconditioncriterion.htm
 */
export default  class IfcConditionCriterion extends IfcControl 
{    
    public readonly specification: IfcConditionCriterionSpecification = IfcConditionCriterionSpecification.instance;

private Criterion_? : IfcLabel|IfcMeasureWithUnit
    private CriterionDateTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConditionCriterionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConditionCriterion';

    public readonly required: ReadonlyArray< string > = [ 'IfcConditionCriterion', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Criterion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel|IfcMeasureWithUnit',
			optional: false
		}, 
		{
			name: 'CriterionDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConditionCriterionSpecification = new IfcConditionCriterionSpecification();
}
