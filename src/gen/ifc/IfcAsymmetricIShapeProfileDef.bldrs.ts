
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm
 */
export default  class IfcAsymmetricIShapeProfileDef extends IfcIShapeProfileDef 
{    
    public readonly specification: IfcAsymmetricIShapeProfileDefSpecification = IfcAsymmetricIShapeProfileDefSpecification.instance;

private TopFlangeWidth_? : IfcPositiveLengthMeasure
    private TopFlangeThickness_? : IfcPositiveLengthMeasure
    private TopFlangeFilletRadius_? : IfcPositiveLengthMeasure
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAsymmetricIShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAsymmetricIShapeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcAsymmetricIShapeProfileDef', 'IfcIShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TopFlangeWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'TopFlangeThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'TopFlangeFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAsymmetricIShapeProfileDefSpecification = new IfcAsymmetricIShapeProfileDefSpecification();
}
