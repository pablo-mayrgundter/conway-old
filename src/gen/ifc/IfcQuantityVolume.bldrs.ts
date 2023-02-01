
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVolumeMeasure from "./IfcVolumeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm
 */
export default  class IfcQuantityVolume extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityVolumeSpecification = IfcQuantityVolumeSpecification.instance;

private VolumeValue_? : IfcVolumeMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityVolumeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityVolume';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityVolume', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VolumeValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityVolumeSpecification = new IfcQuantityVolumeSpecification();
}
