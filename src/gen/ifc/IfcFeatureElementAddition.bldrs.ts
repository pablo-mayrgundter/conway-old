
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelProjectsElement from "./IfcRelProjectsElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementaddition.htm
 */
export default abstract class IfcFeatureElementAddition extends IfcFeatureElement 
{    
    public readonly specification: IfcFeatureElementAdditionSpecification = IfcFeatureElementAdditionSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFeatureElementAdditionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFeatureElementAddition';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElementAddition', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFeatureElementAdditionSpecification = new IfcFeatureElementAdditionSpecification();
}
