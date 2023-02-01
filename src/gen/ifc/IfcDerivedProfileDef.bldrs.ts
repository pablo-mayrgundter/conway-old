
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedprofiledef.htm
 */
export default  class IfcDerivedProfileDef extends IfcProfileDef 
{    
    public readonly specification: IfcDerivedProfileDefSpecification = IfcDerivedProfileDefSpecification.instance;

private ParentProfile_? : IfcProfileDef
    private Operator_? : IfcCartesianTransformationOperator2D
    private Label_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDerivedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDerivedProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcDerivedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ParentProfile',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileDef',
			optional: false
		}, 
		{
			name: 'Operator',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D',
			optional: false
		}, 
		{
			name: 'Label',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDerivedProfileDefSpecification = new IfcDerivedProfileDefSpecification();
}
