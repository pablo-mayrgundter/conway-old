
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostvalue.htm
 */
export default  class IfcCostValue extends IfcAppliedValue 
{    
    public readonly specification: IfcCostValueSpecification = IfcCostValueSpecification.instance;

private CostType_? : IfcLabel
    private Condition_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCostValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostValue';

    public readonly required: ReadonlyArray< string > = [ 'IfcCostValue', 'IfcAppliedValue' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CostType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Condition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCostValueSpecification = new IfcCostValueSpecification();
}
