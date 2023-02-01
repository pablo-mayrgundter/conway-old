
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDuctSilencerTypeEnum from "./IfcDuctSilencerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductsilencertype.htm
 */
export default  class IfcDuctSilencerType extends IfcFlowTreatmentDeviceType 
{    
    public readonly specification: IfcDuctSilencerTypeSpecification = IfcDuctSilencerTypeSpecification.instance;

private PredefinedType_? : IfcDuctSilencerTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDuctSilencerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctSilencerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDuctSilencerType', 'IfcFlowTreatmentDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctSilencerTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDuctSilencerTypeSpecification = new IfcDuctSilencerTypeSpecification();
}
