
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifconedirectionrepeatfactor.htm
 */
export default  class IfcOneDirectionRepeatFactor extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcOneDirectionRepeatFactorSpecification = IfcOneDirectionRepeatFactorSpecification.instance;

private RepeatFactor_? : IfcVector

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOneDirectionRepeatFactorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOneDirectionRepeatFactor';

    public readonly required: ReadonlyArray< string > = [ 'IfcOneDirectionRepeatFactor', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepeatFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOneDirectionRepeatFactorSpecification = new IfcOneDirectionRepeatFactorSpecification();
}
