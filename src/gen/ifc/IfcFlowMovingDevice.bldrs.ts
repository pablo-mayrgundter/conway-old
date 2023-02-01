
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmovingdevice.htm
 */
export default  class IfcFlowMovingDevice extends IfcDistributionFlowElement 
{    
    public readonly specification: IfcFlowMovingDeviceSpecification = IfcFlowMovingDeviceSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFlowMovingDeviceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMovingDevice';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowMovingDevice', 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowMovingDeviceSpecification = new IfcFlowMovingDeviceSpecification();
}
