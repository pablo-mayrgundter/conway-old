
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProjectedOrTrueLengthEnum from "./IfcProjectedOrTrueLengthEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructurallinearaction.htm
 */
export default  class IfcStructuralLinearAction extends IfcStructuralAction 
{    
    public readonly specification: IfcStructuralLinearActionSpecification = IfcStructuralLinearActionSpecification.instance;

private ProjectedOrTrue_? : IfcProjectedOrTrueLengthEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralLinearActionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralLinearAction';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralLinearAction', 'IfcStructuralAction', 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProjectedOrTrue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProjectedOrTrueLengthEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralLinearActionSpecification = new IfcStructuralLinearActionSpecification();
}
