
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparameterizedprofiledef.htm
 */
export default abstract class IfcParameterizedProfileDef extends IfcProfileDef 
{    
    public readonly specification: IfcParameterizedProfileDefSpecification = IfcParameterizedProfileDefSpecification.instance;

private Position_? : IfcAxis2Placement2D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcParameterizedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcParameterizedProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcParameterizedProfileDefSpecification = new IfcParameterizedProfileDefSpecification();
}
