
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCoveringTypeEnum from "./IfcCoveringTypeEnum.bldrs"
import IfcRelCoversSpaces from "./IfcRelCoversSpaces.bldrs"
import IfcRelCoversBldgElements from "./IfcRelCoversBldgElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccovering.htm
 */
export default  class IfcCovering extends IfcBuildingElement 
{    
    public readonly specification: IfcCoveringSpecification = IfcCoveringSpecification.instance;

private PredefinedType_? : IfcCoveringTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCoveringSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCovering';

    public readonly required: ReadonlyArray< string > = [ 'IfcCovering', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoveringTypeEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCoveringSpecification = new IfcCoveringSpecification();
}
