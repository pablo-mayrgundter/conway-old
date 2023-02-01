
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
 */
export default  class IfcSweptDiskSolid extends IfcSolidModel 
{    
    public readonly specification: IfcSweptDiskSolidSpecification = IfcSweptDiskSolidSpecification.instance;

private Directrix_? : IfcCurve
    private Radius_? : IfcPositiveLengthMeasure
    private InnerRadius_? : IfcPositiveLengthMeasure
    private StartParam_? : IfcParameterValue
    private EndParam_? : IfcParameterValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSweptDiskSolidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSweptDiskSolid';

    public readonly required: ReadonlyArray< string > = [ 'IfcSweptDiskSolid', 'IfcSolidModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Directrix',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'InnerRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'StartParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'EndParam',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSweptDiskSolidSpecification = new IfcSweptDiskSolidSpecification();
}
