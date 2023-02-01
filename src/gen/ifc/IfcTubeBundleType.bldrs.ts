
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTubeBundleTypeEnum from "./IfcTubeBundleTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctubebundletype.htm
 */
export default  class IfcTubeBundleType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcTubeBundleTypeSpecification = IfcTubeBundleTypeSpecification.instance;

private PredefinedType_? : IfcTubeBundleTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTubeBundleTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTubeBundleType';

    public readonly required: ReadonlyArray< string > = [ 'IfcTubeBundleType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTubeBundleTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTubeBundleTypeSpecification = new IfcTubeBundleTypeSpecification();
}
