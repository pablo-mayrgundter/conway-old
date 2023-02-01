
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcFeatureElementAddition from "./IfcFeatureElementAddition.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
 */
export default  class IfcRelProjectsElement extends IfcRelConnects 
{    
    public readonly specification: IfcRelProjectsElementSpecification = IfcRelProjectsElementSpecification.instance;

private RelatingElement_? : IfcElement
    private RelatedFeatureElement_? : IfcFeatureElementAddition

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelProjectsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelProjectsElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelProjectsElement', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedFeatureElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementAddition',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelProjectsElementSpecification = new IfcRelProjectsElementSpecification();
}
