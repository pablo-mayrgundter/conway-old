
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelFlowControlElements from "./IfcRelFlowControlElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelement.htm
 */
export default  class IfcDistributionFlowElement extends IfcDistributionElement 
{    
    public readonly specification: IfcDistributionFlowElementSpecification = IfcDistributionFlowElementSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDistributionFlowElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionFlowElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionFlowElementSpecification = new IfcDistributionFlowElementSpecification();
}
