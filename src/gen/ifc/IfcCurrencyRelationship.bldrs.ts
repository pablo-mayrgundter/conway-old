
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLibraryInformation from "./IfcLibraryInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm
 */
export default  class IfcCurrencyRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCurrencyRelationshipSpecification = IfcCurrencyRelationshipSpecification.instance;

private RelatingMonetaryUnit_? : IfcMonetaryUnit
    private RelatedMonetaryUnit_? : IfcMonetaryUnit
    private ExchangeRate_? : IfcPositiveRatioMeasure
    private RateDateTime_? : IfcDateAndTime
    private RateSource_? : IfcLibraryInformation

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurrencyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurrencyRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurrencyRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingMonetaryUnit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonetaryUnit',
			optional: false
		}, 
		{
			name: 'RelatedMonetaryUnit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonetaryUnit',
			optional: false
		}, 
		{
			name: 'ExchangeRate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: false
		}, 
		{
			name: 'RateDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'RateSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLibraryInformation',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurrencyRelationshipSpecification = new IfcCurrencyRelationshipSpecification();
}
