
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementSubtraction from "./IfcFeatureElementSubtraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
 */
export default  class IfcRelVoidsElement extends IfcRelConnects 
{    
    public readonly specification: IfcRelVoidsElementSpecification = IfcRelVoidsElementSpecification.instance;

private RelatingBuildingElement_? : IfcElement
    private RelatedOpeningElement_? : IfcFeatureElementSubtraction

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelVoidsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelVoidsElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelVoidsElement', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedOpeningElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementSubtraction',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelVoidsElementSpecification = new IfcRelVoidsElementSpecification();
}
