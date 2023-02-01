
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralItem from "./IfcStructuralItem.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcStructuralActivity from "./IfcStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
 */
export default  class IfcRelConnectsStructuralActivity extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsStructuralActivitySpecification = IfcRelConnectsStructuralActivitySpecification.instance;

private RelatingElement_? : IfcStructuralItem|IfcElement
    private RelatedStructuralActivity_? : IfcStructuralActivity

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsStructuralActivitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralActivity';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsStructuralActivity', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralItem|IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedStructuralActivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralActivity',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsStructuralActivitySpecification = new IfcRelConnectsStructuralActivitySpecification();
}
