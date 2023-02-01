
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVector from "./IfcVector.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctwodirectionrepeatfactor.htm
 */
export default  class IfcTwoDirectionRepeatFactor extends IfcOneDirectionRepeatFactor 
{    
    public readonly specification: IfcTwoDirectionRepeatFactorSpecification = IfcTwoDirectionRepeatFactorSpecification.instance;

private SecondRepeatFactor_? : IfcVector

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTwoDirectionRepeatFactorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTwoDirectionRepeatFactor';

    public readonly required: ReadonlyArray< string > = [ 'IfcTwoDirectionRepeatFactor', 'IfcOneDirectionRepeatFactor', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SecondRepeatFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVector',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTwoDirectionRepeatFactorSpecification = new IfcTwoDirectionRepeatFactorSpecification();
}
