
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRelVoidsElement from "./IfcRelVoidsElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementsubtraction.htm
 */
export default abstract class IfcFeatureElementSubtraction extends IfcFeatureElement 
{    
    public readonly specification: IfcFeatureElementSubtractionSpecification = IfcFeatureElementSubtractionSpecification.instance;



    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFeatureElementSubtractionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFeatureElementSubtraction';

    public readonly required: ReadonlyArray< string > = [ 'IfcFeatureElementSubtraction', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFeatureElementSubtractionSpecification = new IfcFeatureElementSubtractionSpecification();
}
