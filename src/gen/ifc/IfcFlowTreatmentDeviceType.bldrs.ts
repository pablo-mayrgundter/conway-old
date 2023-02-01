
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowtreatmentdevicetype.htm
 */
export default abstract class IfcFlowTreatmentDeviceType extends IfcDistributionFlowElementType 
{    
    public readonly specification: IfcFlowTreatmentDeviceTypeSpecification = IfcFlowTreatmentDeviceTypeSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFlowTreatmentDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowTreatmentDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTreatmentDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowTreatmentDeviceTypeSpecification = new IfcFlowTreatmentDeviceTypeSpecification();
}
