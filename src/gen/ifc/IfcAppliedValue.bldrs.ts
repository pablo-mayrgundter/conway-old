
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcMonetaryMeasure from "./IfcMonetaryMeasure.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcReferencesValueDocument from "./IfcReferencesValueDocument.bldrs"
import IfcAppliedValueRelationship from "./IfcAppliedValueRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcappliedvalue.htm
 */
export default abstract class IfcAppliedValue extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcAppliedValueSpecification = IfcAppliedValueSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private AppliedValue_? : IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure
    private UnitBasis_? : IfcMeasureWithUnit
    private ApplicableDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private FixedUntilDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAppliedValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAppliedValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcAppliedValue' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'AppliedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure',
			optional: true
		}, 
		{
			name: 'UnitBasis',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit',
			optional: true
		}, 
		{
			name: 'ApplicableDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'FixedUntilDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAppliedValueSpecification = new IfcAppliedValueSpecification();
}
