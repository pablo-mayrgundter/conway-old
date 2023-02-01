
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcResourceConsumptionEnum from "./IfcResourceConsumptionEnum.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresource.htm
 */
export default abstract class IfcConstructionResource extends IfcResource 
{    
    public readonly specification: IfcConstructionResourceSpecification = IfcConstructionResourceSpecification.instance;

private ResourceIdentifier_? : IfcIdentifier
    private ResourceGroup_? : IfcLabel
    private ResourceConsumption_? : IfcResourceConsumptionEnum
    private BaseQuantity_? : IfcMeasureWithUnit

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConstructionResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConstructionResource';

    public readonly required: ReadonlyArray< string > = [ 'IfcConstructionResource', 'IfcResource', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ResourceIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}, 
		{
			name: 'ResourceGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ResourceConsumption',
			isCollection: false,
			rank: 0,
			baseType: 'IfcResourceConsumptionEnum',
			optional: true
		}, 
		{
			name: 'BaseQuantity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMeasureWithUnit',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConstructionResourceSpecification = new IfcConstructionResourceSpecification();
}
