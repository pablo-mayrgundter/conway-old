
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVibrationIsolatorTypeEnum from "./IfcVibrationIsolatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvibrationisolatortype.htm
 */
export default  class IfcVibrationIsolatorType extends IfcDiscreteAccessoryType 
{    
    public readonly specification: IfcVibrationIsolatorTypeSpecification = IfcVibrationIsolatorTypeSpecification.instance;

private PredefinedType_? : IfcVibrationIsolatorTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVibrationIsolatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVibrationIsolatorType';

    public readonly required: ReadonlyArray< string > = [ 'IfcVibrationIsolatorType', 'IfcDiscreteAccessoryType', 'IfcElementComponentType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVibrationIsolatorTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVibrationIsolatorTypeSpecification = new IfcVibrationIsolatorTypeSpecification();
}
