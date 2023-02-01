
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgb.htm
 */
export default  class IfcColourRgb extends IfcColourSpecification 
{    
    public readonly specification: IfcColourRgbSpecification = IfcColourRgbSpecification.instance;

private Red_? : IfcNormalisedRatioMeasure
    private Green_? : IfcNormalisedRatioMeasure
    private Blue_? : IfcNormalisedRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcColourRgbSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcColourRgb';

    public readonly required: ReadonlyArray< string > = [ 'IfcColourRgb', 'IfcColourSpecification' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Red',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: false
		}, 
		{
			name: 'Green',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: false
		}, 
		{
			name: 'Blue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcColourRgbSpecification = new IfcColourRgbSpecification();
}
