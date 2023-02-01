
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPileTypeEnum from "./IfcPileTypeEnum.bldrs"
import IfcPileConstructionEnum from "./IfcPileConstructionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpile.htm
 */
export default  class IfcPile extends IfcBuildingElement 
{    
    public readonly specification: IfcPileSpecification = IfcPileSpecification.instance;

private PredefinedType_? : IfcPileTypeEnum
    private ConstructionType_? : IfcPileConstructionEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPileSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPile';

    public readonly required: ReadonlyArray< string > = [ 'IfcPile', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPileTypeEnum',
			optional: false
		}, 
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPileConstructionEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPileSpecification = new IfcPileSpecification();
}
